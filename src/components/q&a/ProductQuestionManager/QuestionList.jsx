import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question1.jsx';

export default function QuestionList({ questions, productName }) {
  let moreButton;
  if (questions.length > 2) {
    moreButton = <span className="two-buttons"> More Questions</span>;
  }
  const [index, setIndex] = useState(2);
  return (
    <div>
      <ul key={1}>
        {questions.slice(0, index).map((question) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
          <Question key={question.question_id} {...question} productName={productName} />
        ))}
        <span onClick={() => setIndex(index + 2)}>{moreButton}</span>
      </ul>
    </div>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
  productName: PropTypes.string,
};

QuestionList.defaultProps = {
  questions: [],
  productName: '',
};
