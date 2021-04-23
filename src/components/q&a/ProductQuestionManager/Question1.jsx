/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AddAnswerModal from '../Modals/addAnswerModal.jsx'

// eslint-disable-next-line camelcase
// eslint-disable-next-line max-len
export default function Question({
  question_body, question_date, asker_name, question_helpfulness, reported, answers, question_id,
}) {
    const [isReported, setReported] = useState(false)
    let r;
    if(isReported){
      r = <p>Reported</p>
    }else {
      r = <p>Report</p>
    }
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(question_helpfulness)
    const [clicked, setClicked] = useState(false)
    const helpClick = () => {
      if(!clicked){
        setClicked(true)
        setCount(count + 1)
      }
    }
    const [loadClick, setLoadClick] = useState(true)
    const [index, setIndex] = useState(2)
    var isEven = (i) => {
      if(Object.values(answers).length > 2 && i === 2 && loadClick){
        return <div className = "load-more"> Load More Answers</div>
      }
    }
    var isLast = (i) => {
      if(!loadClick && i === (Object.values(answers).length - 1)){
        return <div className="two-buttons">Collapse answers</div>
      }
    }
  return (
    <div className="question-single">
      <div className="question-line">
      <p className="question-body">
        Q:
        {'  '}
        {question_body}
      </p>
      <p className="helpful-count" onClick={() => helpClick()}>
        Helpful? Yes (
        {count}
        )
      </p>
      <p className="add-answer" onClick={() => setIsOpen(true)}>Add Answer</p>
      <AddAnswerModal
      question={question_body}
      id={question_id}
      open={isOpen}
      onClose={() => {setIsOpen(false)}}>
      </AddAnswerModal>
      </div>
      {Object.values(answers).slice(0, index).map((item, i) => (

        <>
          <p className="answer-body">
            A:
            {'  '}
            {item.body}
          </p>
          <div className="answer-user-line">
          <p className="answer-user">
            by:
            {item.answerer_name} {moment(item.date).format('LL')}
          </p>
          <p className="answer-helpful">
            Helpful? Yes ({item.helpfulness})
          </p>
          <p className="report" onClick={() => setReported(true)}>{r}</p>
          <span onClick={() => {
            setIndex(index + Object.values(answers).length)
            setLoadClick(false)
          }}>
            {isEven(i + 1)}
          </span>
          </div>
          <div onClick={() => {
            setLoadClick(true)
            setIndex(2)
          }}>{isLast(i)}</div>
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
  reported: PropTypes.bool,
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
  reported: false,
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
