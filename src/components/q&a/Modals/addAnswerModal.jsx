/* eslint-disable max-len */
// import React from 'react';
// import ReactDom from 'react-dom';

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate (-50%, -50%)',
//   backgroundColor: '#FFF',
//   padding: '50px',
//   zIndex: 1000,
//   borderRadius: '10px',
// };

// const OVERLAY_STYLES = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, .7',
//   zIndex: 1000,
// };

// export default function AddAnswerModal({ open, children, onClose }) {
//   if (!open) return null;

//   return ReactDom.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES}>
//         <h1> Submit Your Answer</h1>
//         <h2>About [Product Name]</h2>
//         <h3>Is the fit of this sweater boxy?</h3>
//         <form className="addQuestionForm">
//           <label type="text"> Your Answer</label>

//           <input style={{display: "block"}} placeholder="Enter a nickname..." />
//           <label type="text"> Your Nickname</label>

//           <input type="message" style={{display: "block"}} placeholder="Enter your nickname..." />

//           <label type="text"> Your Email</label>

//           <input type="email" style={{display: "block"}} placeholder="Enter an email..." />

//         </form>
//         <button onClick={onClose}>Submit Answer</button>
//         {children}
//       </div>
//     </>,
//     document.getElementById('portal'),
//   );
// }
