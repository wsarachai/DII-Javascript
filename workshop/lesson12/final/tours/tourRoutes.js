'use strict';
const express = require('express');
const tourController = require('../controllers/tourController');

const tourRoute = express.Router();

tourRoute
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
tourRoute
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRoute;
