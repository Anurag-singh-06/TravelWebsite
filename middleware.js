const Listing = require("./models/listing");
const {listingSchema} = require("./schema.js")
const ExpressError = require("./utils/ExpressError.js")
const { reviewSchema } = require("./schema.js");
const Review = require("./models/review.js")



module.exports.isLoggedIn = (req,res,next) =>{
 
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in to continue.")
       return res.redirect("/login");
      }
      next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
}

module.exports.isOwner = async(req,res,next)=>{
  let {id} = req.params;
   let listing = await Listing.findById(id);
   if(!listing.owner.equals(res.locals.curUser._id)){
      req.flash("error","You do not have permission to edit or delete this listing, as you are not the owner.");
      return res.redirect(`/listings/${id}`);
   }

   next();
}

// validating listing using JOI
module.exports.validateListing = (req, res, next) => {
  console.log("Request Body: ", req.body);  // Log the request body for debugging

  const { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.details[0].message);
  }
  next();
};


// joi (backend) validation for review
module.exports.validateReview = (req,res,next)=>{
  let {error} = reviewSchema.validate(req.body);

  if(error){
    let errMsg =  error.details.map((el)=> el.message).join(",");
      throw new ExpressError(400,errMsg);
    }
    else {
      next();
    }
};

// is author

module.exports.isReviewAuthor = async(req,res,next)=>{
  let {id,reviewId} = req.params;
   let review = await Review.findById(reviewId);
   if (!review) {
    req.flash("error", "Review not found.");
    return res.redirect(`/listings/${id}`);
  }
   if(!review.author.equals(res.locals.curUser._id)){
      req.flash("error","You do not have permission to delete this review, as you are not the author.");
      return res.redirect(`/listings/${id}`);
   }

   next();
}