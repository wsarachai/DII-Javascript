const mongoose = require('mongoose');

const toursSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must name a name'],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, required: [true, 'A tour must price'] },
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
