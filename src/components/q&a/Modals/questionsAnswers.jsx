// import React, { useState } from 'react';
// import Modal from './modal.jsx';
// import Question from './question.jsx';
// import SearchBar from './searchBar.jsx';
// import sampleData from './sampleData.js';

// const BUTTON_WRAPPER_STYLES = {
//   position: 'relative',
//   zIndex: 1,
// };
// // eslint-disable-next-line max-len
// eslint-disable-next-line max-len
// const sorted = [...sampleData.results].sort((a, b) => b.question_helpfulness - a.question_helpfulness);

// export default function QuestionsAnswers() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
//         <h1 className="title">Questions &amp; Answers</h1>
//         <SearchBar />
//         <Question sorted={sorted} />
//         <button onClick={() => setIsOpen(true)}>Add a Question +</button>
//         <Modal open={isOpen} onClose={() => setIsOpen(false)} />
//       </div>
//     </>
//   );
// }
