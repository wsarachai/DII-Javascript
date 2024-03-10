'use strict';

const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

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

const replaceTemplate = (temp, product) => {
  let output = temp.replace(/{%PRODUCT_NAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  }
  return output;
};

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const cardsHtml = dataObject
      .map(el => replaceTemplate(tempCard, el))
      .join('');
    const outputHtml = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(outputHtml);
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html',
      'my-own-header': 'hello world!',
    });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});