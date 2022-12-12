
const mongoose = require('mongoose');

const womenSchema = mongoose.Schema({
   id: {type: Number, required: true},
   image: {type: String, required: true}, 
   color: {type: String, required: true},
   price: String, 
   review: {type: String, required: true}
})

const WomenModel = mongoose.model("womens",womenSchema);

module.exports = {WomenModel}