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

app.get('/qa/:productId', (req, res) => {
  const { productId } = req.params;
  api.getProductQA(productId)
    .then((results) => res.send(results.data).end())
    .catch((err) => res.status(500).send(err));
});

app.post('/qa/:productId', (req, res) => {
  const { body } = req;

  api.submitQuestion(body)
    .then((results) => res.send(results.data))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});
app.put('/qa/helpful', (req, res) => {
  api.qHelpful(req.body.question_id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

app.put('/qa/answer/helpful', (req, res) => {
  api.submitAHelpful(req.body.answer_id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});
app.put('/qa/questions/report', (req, res) => {
  api.reportQuestion(req.body.question_id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});
app.put('/qa/answers/report', (req, res) => {
  api.reportAnswer(req.body.answer_id)
    .then((response) => res.json(response.data))
    .catch((err) => console.log(err));
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  const { body } = req;
  console.log(body)
  api.addAnswer(body)
    .then((response) => res.json(response.data))
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
});

app.post('/productOverview/cart', (req, res) => {
  const { sku } = req.body;
  api.addToCart(sku)
    .then(() => res.send('Added To cart'))
    .catch((err) => res.status(500).send(err));
});

app.get('/relatedProductId/:id', (req, res) => {
  const { id } = req.params;
  api.getRelatedProductId(id)
    .then((products) => {
      res.json(products.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.get('/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  api.getProductReviews(productId)
    .then((results) => res.send(results.data).end())
    .catch((err) => res.status(500).send(err));
});

app.get('/cart', (req, res) => {
  api.getCart()
    .then(({ data: cart }) => res.send(cart))
    .catch((err) => res.status(500).send(err));
});

app.post('/click', (req, res) => {
  const { body: payload } = req;
  api.trackClick(payload)
    .then(() => res.status(200).end())
    .catch((err) => res.status(500).send(err));
});

module.exports = app;
