


const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then((res)=>{
    console.log("Connected to DB") 
 }) .catch(err => console.log(err));
 
//  async function main() {
//    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
//  }

async function main() {
  await mongoose.connect('mongodb+srv://kunalsinghh941:bEJoCid1uhi70kFE@cluster0.aocci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

 const initDB = async()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner:"670f99fff43758d77dbd384d"}))
   await Listing.insertMany(initData.data);
   console.log("data was initialized succesfully");
 };

 initDB();