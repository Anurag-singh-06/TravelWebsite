const User =  require("../models/user.js");

module.exports.signup = async(req,res)=>{
    try {
     let{username,email,password} = req.body;
     let newUser = new User({ username, email });
 
     let registeredUser = await User.register(newUser, password);
     
     req.login(registeredUser,(err)=>{
       if(err){
          return next(err);
       }
       req.flash("success", "Logged in Successfully");
      return res.redirect("/listings");
     });
    } catch (error) {
       req.flash("error",error.message);
       res.redirect("/signup");
    }
 };

 module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
};


module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};


module.exports.login =  async(req, res) => {
    // Flash message for successful login
    req.flash("success", "Logged in Successfully");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
 };



module.exports.Logout =  (req, res) => {
    req.logout((err) => {
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/listings"); 
        }
        req.flash("success", "Logged out successfully!");
        res.redirect("/listings"); // Redirect to login or homepage after logging out
    });
 };