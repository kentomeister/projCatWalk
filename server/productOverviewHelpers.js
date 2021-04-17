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
  return ratingScoreSum / totalRatings;
};

const parseData = (rawData) => {
  const result = {
    id: rawData[0].id,
    category: rawData[0].category || 'not specified',
    default_price: rawData[0].default_price || 'not specified',
    slogan: rawData[0].slogan || 'not specified',
    description: rawData[0].description || 'not specified',
    avgRating: calcAvgRating(rawData[2].ratings) || -1,
    numReviews: rawData[3].results.length || 0,
    styles: rawData[1].results || [],
  };

  return result;
};

module.exports.parseData = parseData;

/**
result = {
  // This data comes from rawData[0]
  id: '1909',
  category: 'Accessories',
  default_price: '69.00',
  slogan: 'You\'ve got to wear shades',
  description: 'There will be a description with a bunch of text here',

  //this data comes from rawData[1]
  styles: 'rawData[1].results'

  // This data comes from rawData[2]
  avgRating: 'calcualte the average rating from rawData[2]',

  // this data comes from rawData[3]
  numReviews: 'rawData[3].results.length'

}
 */
