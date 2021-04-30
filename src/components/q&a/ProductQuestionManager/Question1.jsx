/* eslint-disable camelcase */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import AddAnswerModal from '../Modals/addAnswerModal.jsx';
import { ProductQuestionContext } from './ProductQuestionContext.jsx';

// eslint-disable-next-line camelcase
// eslint-disable-next-line max-len
export default function Question({
  // eslint-disable-next-line max-len
  question_body, question_date, asker_name, question_helpfulness, reported, answers, question_id, productId, productName,
}) {
  const [isReported, setReported] = useState(false);
  let questionReport;
  if (isReported) {
    questionReport = <p>Reported</p>;
  } else {
    questionReport = <p>Report</p>;
  }
  const [reportAnswerState, setReportAnswerState] = useState(false);
  let answerReport;
  if (reportAnswerState) {
    answerReport = <p>Reported</p>;
  } else {
    answerReport = <p>Report</p>;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(question_helpfulness);
  const [clicked, setClicked] = useState(false);
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
  const productQuestionState = useContext(ProductQuestionContext);
  const [helpfulOnce, setHelpfulOnce] = useState(true);
  const [helpfulClass, setHelpfulClass] = useState('helpful-count');
  const sendHelpful = (id) => {
    setHelpfulClass('clicked');
    if (helpfulOnce) {
      const idObj = {
        question_id: id,
      };
      axios.put('/qa/helpful', idObj)
        .then((response) => {
          productQuestionState.handleQuestionsFetch();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setHelpfulOnce(false);
  };

  const [aHelpfulOnce, setAHelpfulOnce] = useState(true);

  const submitAnswerHelpful = (id) => {
    if (aHelpfulOnce) {
      const idObj = {
        answer_id: id,
      };
      axios.put('/qa/answer/helpful', idObj)
        .then((response) => {
          productQuestionState.handleQuestionsFetch();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setAHelpfulOnce(false);
  };

  const reportQuestion = (id) => {
    setReported(true);
    const idObj = {
      question_id: id,
    };
    axios.put('/qa/questions/report', idObj);
  };

  const reportAnswer = (id) => {
    setReportAnswerState(true);
    const idObj = {
      answer_id: id,
    };
    axios.put('/qa/answers/report', idObj);
  };

  const isSeller = (x) => {
    if (x === 'Seller') {
      return 'answer-user-seller';
    }
    return 'answer-user';
  };

  return (
    <div className="question-single">
      <div className="question-line">
        <span
          key={1}
          className="question-body"
        >
          Q:
          {'  '}
          {question_body}
        </span>
        <span
          key={2}
          className={helpfulClass}
          onClick={() => {
            sendHelpful(question_id);
          }}
        >
          Helpful? Yes (
          {question_helpfulness}
          )
        </span>
        <span
          key={3}
          className="helpful-count"
          onClick={() => {
            reportQuestion(question_id);
          }}
        >
          {questionReport}
        </span>
        <p className="add-answer" onClick={() => setIsOpen(true)}>Add Answer</p>
        <AddAnswerModal
          productId={productId}
          question={question_body}
          id={question_id}
          open={isOpen}
          onClose={() => { setIsOpen(false); }}
          productName={productName}
        />

        {/* <span
          className="add-answer"
          onClick={() => setIsOpen(true)}
        >
          Add Answer
        </span>
        <div>
          <AddAnswerModal
            productId={productId}
            question={question_body}
            id={question_id}
            open={isOpen}
            onClose={() => { setIsOpen(false); }}
          />
        </div> */}
      </div>
      {Object.values(answers).slice(0, index).map((item, i) => (

        <>
          <div>
            <span
              key={4}
              className="answer-body"
            >
              A:
              {'  '}
              {item.body}
            </span>
            <div>
              {item.photos.map((pic) => (
                <img
                  key={pic}
                  className="thumbnail"
                  src={pic}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className="answer-user-line">
            <span className="answer-user-by">by:</span>

            <span
              key={6}
              className={isSeller(item.answerer_name)}
            >
              {item.answerer_name}
              {' '}
            </span>
            <span className="answer-user">{moment(item.date).format('LL')}</span>
            <span
              id={item.id}
              key={7}
              className="answer-helpful"
              onClick={() => { submitAnswerHelpful(item.id); }}
            >
              Helpful? Yes (
              {item.helpfulness}
              )
            </span>
            <span

              key={item.id}
              className="report"
              onClick={() => {
                reportAnswer(item.id);
              }}
            >
              {answerReport}
            </span>

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
      id: 0,
      body: '',
      date: '',
      answerer_name: '',
      helpfulness: 0,
    },
  },
};
