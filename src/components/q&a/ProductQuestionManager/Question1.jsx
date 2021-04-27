/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import AddAnswerModal from '../Modals/addAnswerModal.jsx';

// eslint-disable-next-line camelcase
// eslint-disable-next-line max-len
export default function Question({
  // eslint-disable-next-line max-len
  question_body, question_date, asker_name, question_helpfulness, reported, answers, question_id, productId,
}) {
  const [isReported, setReported] = useState(false);
  let r;
  if (isReported) {
    r = <p>Reported</p>;
  } else {
    r = <p>Report</p>;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(question_helpfulness);
  const [clicked, setClicked] = useState(false);
  const helpClick = () => {
    if (!clicked) {
      setClicked(true);
      setCount(count + 1);
    }
  };
  const [loadClick, setLoadClick] = useState(true);
  const [index, setIndex] = useState(2);
  const isEven = (i) => {
    if (Object.values(answers).length > 2 && i === 2 && loadClick) {
      return <div className="load-more"> Load More Answers</div>;
    }
  };
  const isLast = (i) => {
    if (!loadClick && i === (Object.values(answers).length - 1)) {
      return <div className="two-buttons">Collapse answers</div>;
    }
  };
  const sendHelpful = (id) => {
    const idObj = {
      question_id: id,
    };
    axios.put('/qa/helpful', idObj);
  };
  const submitAnswerHelpful = (id) => {
    const idObj = {
      answer_id: id,
    };
    axios.put('/qa/answer/helpful', idObj);
  };

  const reportQuestion = (id) => {
    const idObj = {
      question_id: id,
    };
    axios.put('/qa/questions/report', idObj);
  };

  const reportAnswer = (id) => {
    const idObj = {
      answer_id: id,
    };
    axios.put('/qa/answers/report', idObj);
  };

  return (
    <div className="question-single">
      <div className="question-line">
        <p className="question-body">
          Q:
          {'  '}
          {question_body}
        </p>
        <p
          className="helpful-count"
          onClick={() => {
            helpClick();
            sendHelpful(question_id);
          }}
        >
          Helpful? Yes (
          {count}
          )
        </p>
        <p
          className="helpful-count"
          onClick={() => {
            setReported(true);
            reportQuestion(question_id);
          }}
        >
          {r}
        </p>
        <p className="add-answer" onClick={() => setIsOpen(true)}>Add Answer</p>
        <AddAnswerModal
          productId={productId}
          question={question_body}
          id={question_id}
          open={isOpen}
          onClose={() => { setIsOpen(false); }}
        />

      </div>
      {Object.values(answers).slice(0, index).map((item, i) => (

        <>
          <p className="answer-body">
            A:
            {'  '}
            {item.body}
          </p>

          {item.photos.map((pic) => (
            <img
              className="thumbnail"
              src={pic}
              alt=""
            />
          ))}

          <div className="answer-user-line">
            <p className="answer-user">
              by:
              {item.answerer_name}
              {' '}
              {moment(item.date).format('LL')}
            </p>
            <p
              className="answer-helpful"
              onClick={() => { submitAnswerHelpful(item.id); }}
            >
              Helpful? Yes (
              {item.helpfulness}
              )
            </p>
            <p
              className="report"
              onClick={() => {
                setReported(true);
                reportAnswer(item.id);
              }}
            >
              {r}
            </p>

            <span onClick={() => {
              setIndex(index + Object.values(answers).length);
              setLoadClick(false);
            }}
            >
              {isEven(i + 1)}
            </span>
          </div>
          <div onClick={() => {
            setLoadClick(true);
            setIndex(2);
          }}
          >
            {isLast(i)}
          </div>
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
