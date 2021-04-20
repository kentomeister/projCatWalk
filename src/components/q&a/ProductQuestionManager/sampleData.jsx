import React from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';

const sampleData = {
  product_id: '19089',
  results: [
    {
      question_id: 153077,
      question_body: "Hey, how's it going?",
      question_date: '2021-03-09T00:00:00.000Z',
      asker_name: 'quintillius',
      question_helpfulness: 12,
      reported: false,
      answers: {
        1443997: {
          id: 1443997,
          body: 'How should I know?',
          date: '2021-03-11T00:00:00.000Z',
          answerer_name: 'Me',
          helpfulness: 3,
          photos: [],
        },
      },
    },
    {
      question_id: 123898,
      question_body: 'What fabric is the top made of?',
      question_date: '2018-01-04T00:00:00.000Z',
      asker_name: 'yankeelover',
      question_helpfulness: 10,
      reported: false,
      answers: {
        1172602: {
          id: 1172602,
          body: "Something pretty soft but I can't be sure",
          date: '2018-01-04T00:00:00.000Z',
          answerer_name: 'metslover',
          helpfulness: 8,
          photos: [
            'https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
            'https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            'https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
          ],
        },
        1172654: {
          id: 1172654,
          body: 'Suede',
          date: '2018-11-04T00:00:00.000Z',
          answerer_name: 'metslover',
          helpfulness: 12,
          photos: [],
        },
        1172692: {
          id: 1172692,
          body: 'Supposedly suede, but I think its synthetic',
          date: '2018-12-04T00:00:00.000Z',
          answerer_name: 'metslover',
          helpfulness: 3,
          photos: [],
        },
        1443262: {
          id: 1443262,
          body: "I think it's made of mystery stuff",
          date: '2021-03-02T00:00:00.000Z',
          answerer_name: 'Zach Kodjo',
          helpfulness: 2,
          photos: [],
        },
        1443689: {
          id: 1443689,
          body: "It's made of sheepskin",
          date: '2021-03-08T00:00:00.000Z',
          answerer_name: 'rock strong',
          helpfulness: 0,
          photos: [],
        },
      },
    },
    {
      question_id: 152524,
      question_body: 'Where in the world is this made? Is it a USA made product?',
      question_date: '2021-03-02T00:00:00.000Z',
      asker_name: 'Zerk',
      question_helpfulness: 6,
      reported: false,
      answers: {},
    },
    {
      question_id: 152523,
      question_body: "What's the best color for this product?",
      question_date: '2021-03-02T00:00:00.000Z',
      asker_name: 'Zach',
      question_helpfulness: 4,
      reported: false,
      answers: {
        1443266: {
          id: 1443266,
          body: 'This is a test from the browser #1001',
          date: '2021-03-02T00:00:00.000Z',
          answerer_name: 'John',
          helpfulness: 8,
          photos: [],
        },
        1443567: {
          id: 1443567,
          body: 'camo ya dummy',
          date: '2021-03-07T00:00:00.000Z',
          answerer_name: 'Tech_Debt',
          helpfulness: 0,
          photos: [],
        },
      },
    },
    {
      question_id: 153094,
      question_body: '',
      question_date: '2021-03-09T00:00:00.000Z',
      asker_name: '',
      question_helpfulness: 1,
      reported: false,
      answers: {
        1444162: {
          id: 1444162,
          body: 'asdfasdf',
          date: '2021-03-12T00:00:00.000Z',
          answerer_name: 'asdfasdfafsd',
          helpfulness: 0,
          photos: [],
        },
      },
    },
  ],
};

export function searchQuestions(questions = [], pattern = '') {
  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['question_body'],
    sortFn(a, b) {
      return a.question_helpfulness - b.question_helpfulness;
    },
  };

  const fuse = new Fuse(questions, options);
  return fuse.search(pattern);
}
// eslint-disable-next-line no-unused-vars
export async function getQuestionsByProductId(productId) {
  // question data
  return Promise.resolve(sampleData);
}
getQuestionsByProductId.propTypes = {
  productId: PropTypes.string,
};
getQuestionsByProductId.defaultProps = {
  productId: '',
};
