/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// eslint-disable-next-line camelcase
// eslint-disable-next-line max-len
export default function Question({
  question_body, question_date, asker_name, question_helpfulness, answers,
}) {
  return (
    <div className="Question">
      <p>
        Q:
        {'  '}
        {question_body}
      </p>
      {/* <p>
        Date:
        {question_date}
      </p> */}
      <p>
        By:
        {'  '}
        {asker_name}
        {'  '}
        {moment(question_date).format('LL')}
      </p>
      <p>
        Helpful? Yes (
        {question_helpfulness}
        )
      </p>
      {Object.values(answers).map((item) => (
        <>
          <p>
            A:
            {item.body}
          </p>
          <p>
            by:
            {item.answerer_name} {moment(item.date).format('LL')}
          </p>
          <p>
            Helpful? Yes ({item.helpfulness})
          </p>
        </>
      ))}
    </div>
  );
}
Question.propTypes = {
  question_body: PropTypes.string,
  asker_name: PropTypes.string,
  question_date: PropTypes.string,
  question_helpfulness: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  answers: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
    }),
  ),
};
Question.defaultProps = {
  question_body: '',
  question_date: '',
  asker_name: '',
  question_helpfulness: 0,
  answers: {
    0: {
      id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
    },
  },
};
// answers: {
//         1444162: {
//           id: 1444162,
//           body: 'asdfasdf',
//           date: '2021-03-12T00:00:00.000Z',
//           answerer_name: 'asdfasdfafsd',
//           helpfulness: 0,
//           photos: [],
//         },

// answers: PropTypes.objectOf(
//   PropTypes.shape({
//     id: PropTypes.number,
//     body: PropTypes.string,
//     date: PropTypes.string,
//     answerer_name: PropTypes.string,
//     helpfulness: PropTypes.number,
//   }),
// ),
