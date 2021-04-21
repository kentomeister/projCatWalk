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

const getRelatedProductId = (id, callback) => {
  return axios.get(`/${id}/related`,
  {
    baseURL: process.env.API_URL,
    headers: {Authorization: process.env.GITHUB_TOKEN}
  }
  )
  .then(data => {
    callback(null, data);
  })
  .catch(err => {
    callback(err, null);
  });
};


module.exports.getRelatedProductId = getRelatedProductId;
module.exports.getProductInfo = getProductInfo;
module.exports.getProductStyles = getProductStyles;
module.exports.getProductReviewMeta = getProductReviewMeta;
module.exports.getProductReviews = getProductReviews;
