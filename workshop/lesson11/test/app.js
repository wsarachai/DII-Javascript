'use strict';
const express = require('express');
const tourRoute = require('./tours/tourRoutes');

const app = express();
app.use(express.json());

app.use('/api/v1/tours', tourRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
