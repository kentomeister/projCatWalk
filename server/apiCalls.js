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

const addToCart = (skuId) => axios({
  method: 'post',
  baseURL: process.env.API_URL,
  url: '/cart',
  headers: { Authorization: process.env.GITHUB_TOKEN },
  data: {
    sku_id: skuId,
  },
});

module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewMeta = getProductReviewMeta;
module.exports.getProductReviews = getProductReviews;
module.exports.addToCart = addToCart;
