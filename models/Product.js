const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  info: {
    name: String,
    dimensions: String,
    weight: String,
    problem: String,
    diagnostic: String,
    result: String,
    price: Number,
    photo: String
  },
  tags: {
    priceRange: String,
    brand: String,
    repair: String,
    replist: String
  }
});

module.exports = mongoose.model('Product', productSchema);