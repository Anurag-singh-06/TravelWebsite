const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const methodOverride = require("method-override");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js")
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload =  multer({storage});



 router
 .route("/")
   // INDEX ROUTE
   .get(wrapAsync(listingController.index))
   .post(
    isLoggedIn,
    
    upload.single('image'),
    validateListing,
    wrapAsync(listingController.createListing)
  );
  


// Create new ROUTES new listing    (we can use try-catch to handle error or can create custom error classes or wrapAsync function to handle errors)
router.get(
  "/new",
  isLoggedIn,
  wrapAsync(listingController.renderNewForm)
);

router
 .route("/:id")
   // SHOW ROUTE
   .get(wrapAsync(listingController.showListing))
   //UPDATE
   .put(
    isLoggedIn,
    isOwner,
    upload.single('image'),
    validateListing,
    wrapAsync(listingController.updateListing))
    //DELETE ROUTE
    .delete(
      isLoggedIn,
      isOwner,
      wrapAsync(listingController.deleteListing));


//Edit Route (we can use try-catch to handle error or can create custom error classes or wrapAsync function to handle errors)
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);




module.exports = router;
