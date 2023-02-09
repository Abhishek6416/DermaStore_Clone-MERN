const mongoose = require("mongoose");
require("dotenv").config();

const dbID = process.env.DB_ID;
const dbPassword = process.env.DB_PASSWORD;

const connection = mongoose.connect(
  
  `mongodb+srv://abhishekh:abhishek123@ecommercewebsite.ctbpksc.mongodb.net/?retryWrites=true&w=majority`
);
// mongodb+srv://abhishekh:abhishek123@ecommercewebsite.ctbpksc.mongodb.net/?retryWrites=true&w=majority

module.exports = connection;
