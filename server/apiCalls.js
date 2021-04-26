const axios = require('axios');

const getProductInfo = (productId) => axios.get(`/products/${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductStyles = (productId) => axios.get(`/products/${productId}/styles`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductReviewMeta = (productId) => axios.get(`/reviews/meta?product_id=${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductReviews = (productId) => axios.get(`/reviews?product_id=${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const getProductQA = (productId) => axios.get(`/qa/questions/?product_id=${productId}`, {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const submitQuestion = (body) => axios({
  url: '/qa/questions',
  method: 'post',
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    body: body.body,
    name: body.name,
    email: body.email,
    product_id: Number(body.product_id),
  },
});

const getCart = () => axios.get('/cart', {
  baseURL: process.env.API_URL,
  headers: { Authorization: process.env.GITHUB_TOKEN },
});

const addToCart = (skuId) => axios({
  method: 'post',
  baseURL: process.env.API_URL,
  url: '/cart',
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    sku_id: skuId,
  },
});

const getRelatedProductId = (id) => axios.get(`/products/${id}/related`,
  {
    baseURL: process.env.API_URL,
    headers: { Authorization: process.env.GITHUB_TOKEN },
  });

module.exports.submitQuestion = submitQuestion;
module.exports.getProductQA = getProductQA;
module.exports.getRelatedProductId = getRelatedProductId;
module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewMeta = getProductReviewMeta;
module.exports.getProductReviews = getProductReviews;
module.exports.getCart = getCart;
module.exports.addToCart = addToCart;
