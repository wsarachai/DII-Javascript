'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
  path.join(__dirname, 'template-overview.html'),
  'utf8'
);
const tempProduct = fs.readFileSync(
  path.join(__dirname, 'template-product.html'),
  'utf8'
);
const tempCard = fs.readFileSync(
  path.join(__dirname, 'template-card.html'),
  'utf8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  // const pathName = req.url;
  let p = url.parse(req.url, true);

  const { query, pathname: pathName } = p;

  if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const cardsHtml = dataObject.map(el => replaceTemplate(tempCard, el)).join('');
    const outputHtml = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(outputHtml);
  } else if (pathName === '/product') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathName === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    });
    res.end('<h1>Page not found</h1>');
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
})
