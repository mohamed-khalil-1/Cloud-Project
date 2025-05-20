const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  list: { type: mongoose.Schema.Types.ObjectId, ref: 'List' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviews: [
    {
      review: String,
      owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      createdAt: Date,
      rating: Number
    }
  ]
});

module.exports = mongoose.model('Item', itemSchema);
