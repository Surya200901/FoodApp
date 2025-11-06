const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  isOpen: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Store', StoreSchema);
