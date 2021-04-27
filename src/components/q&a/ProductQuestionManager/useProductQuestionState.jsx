import { useEffect, useState } from 'react';
import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export function useProductQuestionState(productId) {
  const [questionData, setQuestionData] = useState({ results: [] });

  useEffect(() => {
    const handleQuestionsFetch = async () => {
      axios.get(`/qa/${productId}`)
        .then((response) => setQuestionData(response.data));
    };

    handleQuestionsFetch();
  }, [productId]);

  return {
    ...questionData,
    results: [...questionData.results].sort(
      (a, b) => b.question_helpfulness - a.question_helpfulness,
    ),
  };
}
