import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question1.jsx';

export default function QuestionList({ questions }) {
  return (

    <ul>
      {questions.map((question) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Question key={question.question_id} {...question} />
      ))}
    </ul>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};

QuestionList.defaultProps = {
  questions: [],
};
