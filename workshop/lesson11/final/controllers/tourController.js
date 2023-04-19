'use strict';

const fs = require('fs');
const path = require('path');

const jsonData = fs.readFileSync(
  path.join(__dirname, '../dev-data', 'tours-simple.json'),
  'utf-8'
);
const tours = JSON.parse(jsonData);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: tours,
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    path.join(__dirname, 'dev-data', 'tours-simple.json'),
    JSON.stringify(tours),
    err => {
      res.status(200).json({
        status: 'success',
        data: newTour,
      });
    }
  );
};

exports.getTour = (req, res) => {
  const id = Number.parseInt(req.params.id);
  const tour = tours.find(el => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'failed',
      message: 'Tour not found',
    });
  }
  res.status(200).json({
    status: 'success',
    data: tour,
  });
};
