
const mongoose = require('mongoose');

const womenSchema = mongoose.Schema({
   id: {type: Number},
   image: {type: String, required: true}, 
   color: {type: String, required: true},
   price: String, 
   review: {type: String, required: true},
   userID: String
})

const WomenModel = mongoose.model("womens",womenSchema);

module.exports = {WomenModel}