const Listing = require("../models/listing.js")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



module.exports.index = async(req, res) => {
    const allListings = await Listing.find({});
        res.render("listings/index.ejs",{ allListings });
};

module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
  };

module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");
    if (!listing) {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    } else {
      res.render("listings/show.ejs", { listing });
    }
  };

  module.exports.createListing = async (req, res, next) => {
    // if(!req.body.listing){
    //    throw new ExpressError(404,"Send valid data for listing");
    // }


    // MAP FORWARD GEOCODING
    let response = await geocodingClient.forwardGeocode({
      query: req.body.location,
      limit: 1,
    })
      .send();
      



    let url = req.file.path;
    let filename =  req.file.filename;
    let { title, description, price, image, location, country } = req.body;
    let newListing = new Listing({
      title: title,
      description: description,
      price: price,
      image: image,
      location: location,
      country: country,
      owner: "",
    });

    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();
    req.flash("success", "New Listing Added!");
    res.redirect("/listings");
  };


  module.exports.renderEditForm =  async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing you requested for does not exist");
      res.redirect("/listings");
    } else {
      res.render("listings/edit.ejs", { listing });
    }
  };

  module.exports.updateListing = async (req, res) => {
    //   if(!req.body.listing){
    //     console.log(req.body);
    //     throw new ExpressError(404,"Send valid data for listing");
    //  }
    let { id } = req.params;
    let { title, price, image, description, location, country } = req.body;

    let listing = await Listing.findByIdAndUpdate(
      id,
      { title, price, image, description, location, country },
      { new: true, runValidators: true }
    );

    
    
    if(typeof req.file !== "undefined"){
      let url = req.file.path;
      let filename =  req.file.filename;
      listing.image = {url,filename};
      await listing.save(); 
    }
   

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
  };


  module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
  };