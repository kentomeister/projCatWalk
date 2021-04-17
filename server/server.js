require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const api = require('./apiCalls.js');
const productOverview = require('./productOverviewHelpers.js');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
if (process.env.NODE_ENV === 'production') {
  console.log('in production');
  app.use(morgan('tiny'));
}
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
