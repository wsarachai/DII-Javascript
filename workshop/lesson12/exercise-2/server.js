'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection successful!');
  });

const app = require('./app');

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});