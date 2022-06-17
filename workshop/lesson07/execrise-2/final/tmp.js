const mongoose = require('mongoose');
const uri =
  'mongodb+srv://wsarachai:keng1976@cluster0.me86g.mongodb.net/natours?retryWrites=true&w=majority';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

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

const tour = new Tour({
  name: 'The Rorest Hiker',
  rating: 4.7,
  price: 497,
});

tour
  .save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => console.log('Error!!', err));
