import React, { useState } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useProductQuestionState } from '../ProductQuestionManager/useProductQuestionState.jsx';

export default function AddAnswerModal({
  open, children, onClose, question, id, productId, productName,
}) {
  if (!open) return null;
  const { register, handleSubmit, formState: { errors } } = useForm();

  let [photoArray, setPhotoArray] = useState([]);

  setPhotoArray = () => {
    const selectedFile = document.getElementById('input').files[0];
    const objectURL = window.webkitURL.createObjectURL(selectedFile);
    photoArray.push(objectURL);
  };

  const onSubmit = (data) => {
    onClose();
    const aObj = {
      body: data.answer,
      name: data.name,
      email: data.email,
      photos: photoArray,
      question_id: id,
    };
    console.log(aObj.photos);

    axios.post('/qa/questions/:question_id/answers', aObj)
      .then(() => console.log('done'))
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

  return ReactDom.createPortal(
    <>
      <div className="overlay-styes" />
      <div className="add-question-modal">
        <div className="form-headings"> Submit Your Answer</div>
        <div className="form-headings">
          {productName}
          {' '}
          :
        </div>
        <div className="form-headings-question">{question}</div>
        <span className="close" onClick={onClose} />
        {/* <h3 className="form-headings">{question}</h3> */}
        <form className="addQuestionForm" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label" type="text"> Your Answer</label>

          <input
            name="answer"
            className="addQInputs"
            placeholder="Enter your answer..."
            type="text"
            aria-invalid={errors.answer ? 'true' : 'false'}
            {...register('answer', {
              required: true,
              maxLength: 1000,
              message: 'error message',
            })}
          />
          {errors.answer && errors.answer.type === 'required' && (
          <span className="error" role="alert">You must enter an answer</span>
          )}
          {errors.answer && errors.answer.type === 'maxLength' && (
          <span className="error" role="alert">Max length exceeded</span>
          )}

          <label className="form-label" type="text"> Your Nickname</label>

          <input
            type="text"
            name="name"
            className="addQInputs"
            placeholder="Example: jackson11!"
            {...register('name', {
              required: true,
              maxLength: 60,
              message: 'error message',
            })}
          />

          {errors.name && errors.name.type === 'required' && (
          <span className="error" role="alert">You must enter a name</span>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
          <span className="error" role="alert">Max length exceeded</span>
          )}

          <label className="form-label" type="text"> Your Email</label>

          <input
            className="addQInputs"
            type="text"
            placeholder="Example: joe@schmoe.com"
            name="email"
            {...register('email', {
              required: true,
              maxLength: 60,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />

          {errors.email && errors.email.type === 'required' && (
          <span className="error" role="alert">You must enter an email address</span>
          )}
          {errors.email && errors.email.type === 'maxLength' && (
          <span className="error" role="alert">Max length exceeded</span>
          )}
          {errors.email && errors.email.type === 'pattern' && (
          <span className="error" role="alert">This is not a valid email</span>
          )}

          <label className="form-label" type="text"> Upload Pictures </label>
          <input
            id="input"
            className="addQInputs"
            type="file"
            name="pictures"
            // {...register("pictures")}
            onChange={setPhotoArray}
          />
          <input
            className="two-buttons"
            type="submit"
          />
        </form>

        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
}

// const [selectedFile, setSelectedFile] = useState(null);
// const [showThumbs, setShowThumbs] = useState(false);
// let thumbs;
// if (showThumbs) {
//   thumbs = <img src={selectedFile} className="thumbnail" />;
// }
// onChange={(e) => {
//   setShowThumbs(true);
//   setSelectedFile(URL.createObjectURL(e.target.files[0]));
// }}
