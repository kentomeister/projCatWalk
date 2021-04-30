import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import Question from './Question1.jsx';

export default function QuestionList({ questions, productName }) {

  var moreButton
  if(questions.length > 2){
    moreButton = <span className="two-buttons"> More Questions</span>
  }
  const [index, setIndex] = useState(2)
  return (

    <ul>
      {questions.slice(0, index).map((question) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Question key={question.question_id} {...question} productName={productName} />
      ))}
    <span onClick={() => setIndex(index + 2)}>{moreButton}</span>
    </ul>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object),
};

QuestionList.defaultProps = {
  questions: [],
};
