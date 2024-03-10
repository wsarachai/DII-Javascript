'use strict';
const express = require('express');
const tourRoute = require('./tours/tourRoutes');

const app = express();
app.use(express.json());
app.use('/api/v1/tours', tourRoute);
app.use(express.static(`${__dirname}/public`));

module.exports = app;