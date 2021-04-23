import { useEffect, useState } from 'react';
// import { getQuestionsByProductId } from './sampleData.jsx';
import regeneratorRuntime from "regenerator-runtime";
import axios from 'axios';

export function useProductQuestionState(productId) {
  const [questionData, setQuestionData] = useState({ results: [] });

  // useEffect(() => {
  //   const handleQuestionsFetch = async () => {
  //     const response = await getQuestionsByProductId(productId);
  //     setQuestionData(response);
  //   };
    useEffect(() => {
      const handleQuestionsFetch = async () => {
        // const response = await getQuestionsByProductId(productId);
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


