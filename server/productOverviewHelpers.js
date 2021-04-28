const calcAvgRating = (ratingsObj) => {
  if (ratingsObj === undefined || ratingsObj instanceof Object === false) {
    return 0;
  }
  const ratingLevels = Object.keys(ratingsObj);
  const numOfRatings = Object.values(ratingsObj);
  if (ratingLevels.length === 0) {
    return 0;
  }
  let ratingScoreSum = 0;
  ratingLevels.forEach((ratingLevel, i) => {
    ratingScoreSum += ratingLevel * numOfRatings[i];
  });
  const totalRatings = numOfRatings.reduce((memo, numOfVotes) => memo + Number(numOfVotes), 0);
  return (ratingScoreSum / totalRatings).toFixed(1);
};

const parseData = (rawData) => ({
  id: rawData[0].id,
  name: rawData[0].name,
  category: rawData[0].category || null,
  default_price: rawData[0].default_price || null,
  slogan: rawData[0].slogan || null,
  description: rawData[0].description || null,
  features: rawData[0].features,
  avgRating: calcAvgRating(rawData[2].ratings).toString() || -1,
  numReviews: rawData[3].results.length || 0,
  styles: rawData[1].results || null,
});

module.exports.parseData = parseData;
module.exports.calcAvgRating = calcAvgRating;
