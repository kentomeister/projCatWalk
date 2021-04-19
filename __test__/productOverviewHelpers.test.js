/* eslint-disable no-undef */
describe('ProductoverviewHelpers module', () => {
  jest.disableAutomock();
  const productOverviewHelpers = require('../server/productOverviewHelpers.js');

  test('calcAvgRating function calculates & returns average', () => {
    const ratingsObj = {
      2: '1',
      3: '1',
      4: '2',
      5: '3',
    };
    expect(productOverviewHelpers.calcAvgRating(ratingsObj)).toBe(4);
  });

  test('calcAvgRating returns 0 if input argument is not an object', () => {
    expect(productOverviewHelpers.calcAvgRating(2)).toEqual(0);
  });
  test('calcAvgRating returns 0 if input argument is an empty object', () => {
    expect(productOverviewHelpers.calcAvgRating({})).toEqual(0);
  });

  test('parseData returns object with correct keys when all data is present', () => {
    const rawData = [
      {
        id: 19092,
        campus: "hr-rfe",
        name: "Slacker's Slacks",
        slogan: "Comfortable for everything, or nothing",
        description: "I\'ll tell you how great they are after I nap for a bit.",
        category: "Pants",
        default_price: "65.00",
        created_at: "2021-02-23T19:24:34.450Z",
        updated_at: "2021-02-23T19:24:34.450Z",
        features: [
            {
                feature: "Fabric",
                value: "99% Cotton 1% Elastic"
            },
            {
                feature: "Cut",
                value: "Loose"
            }
        ]
      },
      {
        product_id: "19092",
        results: [
            {
                style_id: 103482,
                name: "Black",
                original_price: "65.00",
                sale_price: null,
                "default?": true,
                photos: [
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    }
                ],
                skus: {
                    599603: {
                        quantity: 8,
                        size: "XS"
                    },
                    599604: {
                        quantity: 16,
                        size: "S"
                    },
                    599605: {
                        quantity: 17,
                        size: "M"
                    },
                    599606: {
                        quantity: 10,
                        size: "L"
                    },
                    599607: {
                        quantity: 15,
                        size: "XL"
                    },
                    599608: {
                        quantity: 6,
                        size: "XXL"
                    }
                }
            },
            {
                style_id: 103483,
                name: "Olive Green",
                original_price: "65.00",
                sale_price: null,
                "default?": false,
                photos: [
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    },
                    {
                        thumbnail_url: "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                        url: "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                    }
                ],
                skus: {
                    599609: {
                        quantity: 8,
                        size: "XS"
                    },
                    599610: {
                        quantity: 16,
                        size: "S"
                    },
                    599611: {
                        quantity: 17,
                        size: "M"
                    },
                    599612: {
                        quantity: 10,
                        size: "L"
                    },
                    599613: {
                        quantity: 15,
                        size: "XL"
                    },
                    599614: {
                        quantity: 6,
                        size: "XXL"
                    }
                }
            },
        ]
      },
      {
        product_id: "19092",
        ratings: {
            2: "2",
            3: "1",
            4: "15",
            5: "8"
        },
        recommended: {
            false: "13",
            true: "13"
        },
        characteristics: {
            Fit: {
                id: 64068,
                value: "3.1538461538461538"
            },
            Length: {
                id: 64069,
                value: "3.3846153846153846"
            },
            Comfort: {
                id: 64070,
                value: "3.3846153846153846"
            },
            Quality: {
                id: 64071,
                value: "3.5000000000000000"
            }
        }
      },
      {
        product: "19092",
        page: 0,
        count: 5,
        results: [
            {
                review_id: 289131,
                rating: 2,
                summary: "Et fuga cumque officiis earum non quaerat sit doloribus quibusdam.",
                recommend: true,
                response: null,
                body: "Velit est error. Et error tempora et corporis et itaque. Et molestias laboriosam sint sint. Incidunt modi cumque ut molestiae vitae.",
                date: "2021-03-15T00:00:00.000Z",
                reviewer_name: "Joanne.Sanford79",
                helpfulness: 0,
                photos: [
                    {
                        id: 496802,
                        url: "https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"
                    },
                    {
                        id: 496803,
                        url: "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    }
                ]
            },
            {
                review_id: 289130,
                rating: 4,
                summary: "adwad",
                recommend: true,
                response: null,
                body: "wadwfrdufiagwudjawjdkjwjhud2iyhdpla;da2dadadwacwadwad",
                date: "2021-03-15T00:00:00.000Z",
                reviewer_name: "wdawda",
                helpfulness: 0,
                photos: [
                    {
                        id: 496801,
                        url: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"
                    }
                ]
            },
            {
                review_id: 289129,
                rating: 4,
                summary: "Example",
                recommend: false,
                response: null,
                body: "Yeah I liked the product, but it depends... lol I needed 50 characters to try this thing up",
                date: "2021-03-15T00:00:00.000Z",
                reviewer_name: "Example",
                helpfulness: 0,
                photos: [
                    {
                        id: 496800,
                        url: "https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg"
                    }
                ]
            },
            {
                review_id: 288776,
                rating: 5,
                summary: ";ajkdsflkjasdfn",
                recommend: true,
                response: null,
                body: "a;lsdfl;asulzxnaialnf;dlsuaoishjnwefoihjpoajsdflnasd;l",
                date: "2021-03-11T00:00:00.000Z",
                reviewer_name: ";ladjsfl;kajsdf",
                helpfulness: 0,
                photos: [
                    {
                        id: 496689,
                        url: "https://photolemur.com/uploads/blog/unnamed.jpg"
                    }
                ]
            }
        ]
      }
    ]
    const result = productOverviewHelpers.parseData(rawData)
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('category');
    expect(result).toHaveProperty('default_price');
    expect(result).toHaveProperty('slogan');
    expect(result).toHaveProperty('description');
    expect(result).toHaveProperty('avgRating');
    expect(result).toHaveProperty('numReviews');
    expect(result).toHaveProperty('styles');
  });

  test('parseData returns object with default Values when data is missing', () => {
    const rawData = [
      {
        id: 19092,
        campus: "hr-rfe",
        name: "Slacker's Slacks",
        created_at: "2021-02-23T19:24:34.450Z",
        updated_at: "2021-02-23T19:24:34.450Z",
        features: [
            {
                feature: "Fabric",
                value: "99% Cotton 1% Elastic"
            },
            {
                feature: "Cut",
                value: "Loose"
            }
        ]
      },
      {
        product_id: "19092",
      },
      {
        product_id: "19092",
        ratings: {},
        recommended: {
            false: "13",
            true: "13"
        },
        characteristics: {
            Fit: {
                id: 64068,
                value: "3.1538461538461538"
            },
            Length: {
                id: 64069,
                value: "3.3846153846153846"
            },
            Comfort: {
                id: 64070,
                value: "3.3846153846153846"
            },
            Quality: {
                id: 64071,
                value: "3.5000000000000000"
            }
        }
      },
      {
        product: "19092",
        page: 0,
        count: 0,
        results: []
      }
    ]
    const parsedData = productOverviewHelpers.parseData(rawData)
    expect(parsedData.category).toBeNull();
    expect(parsedData.name).not.toBeNull();
    expect(parsedData.default_price).toBeNull();
    expect(parsedData.slogan).toBeNull();
    expect(parsedData.slogan).toBeNull();
    expect(parsedData.avgRating).toEqual(-1);
    expect(parsedData.styles).toBeNull();
  });
});