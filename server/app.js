require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const api = require('./apiCalls');

const productOverview = require('./productOverviewHelpers.js');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('tiny'));
}

app.get('/test', (req, res) => {
  res.status(200).end();
});

app.get('/productOverview/:productId', (req, res) => {
  const { productId } = req.params;
  Promise.all([
    api.getProductInfo(productId),
    api.getProductStyles(productId),
    api.getProductReviewMeta(productId),
    api.getProductReviews(productId),
  ])
    .then((results) => results.map((result) => result.data))
    .then((rawData) => productOverview.parseData(rawData))
    .then((parsedData) => res.send(parsedData).end())
    .catch((err) => res.status(500).send(err));
});

app.post('/productOverview/cart', (req, res) => {
  const { sku } = req.body;
  api.addToCart(sku)
    .then((response) => res.send('Added To cart'))
    .catch((err) => res.status(500).send(err));
});

module.exports = app;
