const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: "string",
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: "string",
    trim: true,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
    
  
}, {
  timestamps: true,
  versionKey: false
})

const Product = mongoose.model('Product', productSchema);
module.exports ={Product}