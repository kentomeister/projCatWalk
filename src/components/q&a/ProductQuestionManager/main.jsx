import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import QuestionSearch from './QuestionsSearch.jsx';
import QuestionList from './QuestionList.jsx';
import { useProductQuestionState } from './useProductQuestionState.jsx';
import { searchQuestions } from './sampleData.jsx';

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

  return (
    <div>
      <QuestionSearch onChange={onSearchChange} />
      <QuestionList
        questions={
          results?.length > 0 ? results.map((r) => r.item) : questionResults
        }
      />
    </div>
  );
}
ProductQuestionManager.propTypes = {
  productId: PropTypes.string,
};
ProductQuestionManager.defaultProps = {
  productId: '',
};
