import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export function useProductQuestionState(productId) {
  const [questionData, setQuestionData] = useState({ results: [] });

  const handleQuestionsFetch = useCallback(async () => {
    const response = await axios.get(`/qa/${productId}`)
    .then((results) => setQuestionData(results.data));
  }, [setQuestionData, productId]);

  useEffect(() => {
    handleQuestionsFetch();
  }, [handleQuestionsFetch]);

  return {
    ...questionData,
    handleQuestionsFetch,
    results: [...questionData.results].sort(
      (a, b) => b.question_helpfulness - a.question_helpfulness,
    ),
  };
}
