import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import QuestionSearch from './QuestionsSearch.jsx';
import QuestionList from './QuestionList.jsx';
import { useProductQuestionState } from './useProductQuestionState.jsx';
import Modal from '../Modals/modal.jsx';
import { ProductQuestionContext } from './ProductQuestionContext.jsx';

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

export default function ProductQuestionManager({ productId, productName }) {
  const productQuestionState = useProductQuestionState(productId);
  const questionResults = productQuestionState?.results;
  const [results, setResults] = useState(null);

  const onSearchChange = useCallback(
    (pattern) => {
      const searchResults = searchQuestions(questionResults, pattern);
      setResults(searchResults);
    },
    [questionResults, setResults],
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ProductQuestionContext.Provider value={productQuestionState}>
    <div className="q-a-div">
      <h1 className="q-a-header">Questions &amp; Answers</h1>
      <QuestionSearch onChange={onSearchChange} />
      <QuestionList
        productName={productName}
        productId={productId}
        questions={
          results?.length > 0 ? results.map((r) => r.item) : questionResults
        }
      />
      <span className="two-buttons" onClick={() => setIsOpen(true)}>Add a Question +</span>
      <Modal
        productId={productId}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        productName={productName}
      />
    </div>
    </ProductQuestionContext.Provider>
  );
}
ProductQuestionManager.propTypes = {
  productId: PropTypes.string,
};
ProductQuestionManager.defaultProps = {
  productId: '',
};
