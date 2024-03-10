'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.post('/', (req, res) => {
  res.status(200).send('Hello, world!. This is a post method.');
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});