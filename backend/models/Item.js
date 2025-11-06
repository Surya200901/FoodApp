const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  category: { type: String, index: true },
  description: { type: String },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Item', ItemSchema);
