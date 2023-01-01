const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: { type: String, required: true },
  products: [
    {
      product_id: { type: String, required: true},
      quantity: { type: Number, required: true}
    },
  ],
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
