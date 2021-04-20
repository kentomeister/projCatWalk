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

// export default function Modal({ open, children, onClose }) {
//   if (!open) return null;

//   return ReactDom.createPortal(
//     <>
//       <div style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES}>
//         <h1> Ask Your Question</h1>
//         <h2>About [Product Name]</h2>
//         <form className="addQuestionForm">
//           <label type="text"> Your Nickname</label>

//           <input style={{display: "block"}} placeholder="Enter a nickname..." />

//           <label type="text"> Your Email</label>

//           <input type="email" style={{display: "block"}} placeholder="Enter an email..." />

//           <label type="text"> Your Question</label>

// eslint-disable-next-line max-len
//           <input type="message" style={{display: "block"}} placeholder="Enter your question..." />

//         </form>
//         <button onClick={onClose}>Submit Question</button>
//         {children}
//       </div>
//     </>,
//     document.getElementById('portal'),
//   );
// }
