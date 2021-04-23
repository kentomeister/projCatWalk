import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import QuestionSearch from './QuestionsSearch.jsx';
import QuestionList from './QuestionList.jsx';
import { useProductQuestionState } from './useProductQuestionState.jsx';
import Modal from '../Modals/modal.jsx'
import Fuse from 'fuse.js';
export function searchQuestions(questions = [], pattern = '') {
  const options = {
    keys: ['question_body'],
    sortFn(a, b) {
      return a.question_helpfulness - b.question_helpfulness;
    },
  };

  const fuse = new Fuse(questions, options);
  return fuse.search(pattern);
}

export default function ProductQuestionManager({ productId }) {
  const questionsData = useProductQuestionState(productId);
  const questionResults = questionsData?.results;
  const [results, setResults] = useState(null);

  const onSearchChange = useCallback(
    (pattern) => {
      const searchResults = searchQuestions(questionResults, pattern);
      setResults(searchResults);
    },
    [questionResults, setResults],
  );
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="q-a-div">
      <h1 className="q-a-header">Questions &amp; Answers</h1>
      <QuestionSearch onChange={onSearchChange} />
      <QuestionList
        questions={
          results?.length > 0 ? results.map((r) => r.item) : questionResults
        }
      />
      <span className="two-buttons" onClick={() => setIsOpen(true)}>Add a Question +</span>
        <Modal productId={productId} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
ProductQuestionManager.propTypes = {
  productId: PropTypes.number,
};
ProductQuestionManager.defaultProps = {
  productId: '',
};
