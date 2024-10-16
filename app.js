if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
  // console.log(process.env);
}
const dbUrl = process.env.ATLASDB_URL;

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js")
const listingSchema = require("./schema.js")
const Review = require("./models/review.js")
const { reviewSchema } = require("./schema.js");

const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")

const session = require("express-session");
const  MongoStore = require('connect-mongo');
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require('./models/user.js');


// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

main().then((res)=>{
   console.log("Connected to DB") 
}) .catch(err => console.log(err));



// 'mongodb://127.0.0.1:27017/wanderlust'
async function main() {
  await mongoose.connect(dbUrl);
}

// app.get('/', (req, res) => {
//     res.send('Hello from the home route!');
//   });

 // USING EXPRESS SESSION
 // defining options

 const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  } ,
  touchAfter: 24*3600,
})

store.on("error",() => {
  console.log("ERROR IN  MONGO SESSION STORE",err);
});

const sessionOptions = {
  store,
  secret:  process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7*24*60*60*1000,
    maxAge: 7*24*60*60*1000,
    httpOnly: true,
  },
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//DEMO USER
// app.get("/demouser",async(req,res)=>{
//   let fakeUser = new User({
//       email: "rahul@gmail.com",
//       username: "Rahul123",
//   })

//  let newUser = await User.register(fakeUser, "Rahul@123");
//  res.send(newUser);
// })


app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.curUser = req.user;
  next();
});
  
  //using listings from routes folder

  app.use("/listings", listingsRouter);


   //using reviews from routes folder

   app.use("/listings/:id/reviews",reviewsRouter);


   //using user From routes folder
   app.use("/",userRouter);

 

  

// app.get('/testListing', async (req,res) =>{
//     let sampleListing = new Listing({
//         title: "My New Villa 2",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
     
//     await sampleListing.save().then((res)=>{
//         // console.log(res);
//         console.log("sample was saved");
//     });
    
//     res.send("Successful Testing");
// });


// Custom error handler (we can use try-catch to handle error or can create custom error classes or wrapAsync function to handle errors)


app.all("*", (req,res,next)=>{
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err,req,res,next) =>{
  // res.send("something went wrong");
  let { statusCode = 500, message = "Something went wrong!"} = err;
  res.status(statusCode).render("error.ejs",{err})
})


app.listen(8080, ()=>{
    console.log("Server listening on port 8080");
});

