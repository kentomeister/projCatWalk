import React, { useState, useContext } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useProductQuestionState } from '../ProductQuestionManager/useProductQuestionState.jsx';
import { ProductQuestionContext } from '../ProductQuestionManager/ProductQuestionContext.jsx';

export default function AddAnswerModal({
  open, children, onClose, question, id, productId, productName,
}) {
  if (!open) return null;
  const { register, handleSubmit, formState: { errors } } = useForm();

  let [photoArray, setPhotoArray] = useState([]);

  let [sourceState, setSourceState] = useState([]);
  const [classState, setClassState] = useState('');

  setSourceState = (x) => {
    sourceState.push(x);
  };
  const [count, setCount] = useState(0);
  let [fakePhoto, setFakePhoto] = useState([]);

  setFakePhoto = () => {
    fakePhoto.push('https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg');
  };
  setPhotoArray = () => {
    const selectedFile = document.getElementById('input').files[0];
    const objectURL = window.webkitURL.createObjectURL(selectedFile);
    photoArray.push(objectURL);
    setSourceState(objectURL);
    setClassState('thumbnail');
    setCount(count + 1);
    setFakePhoto();
  };

  const photoPreview = (
    sourceState.map((pic) => (
      <img
        className={classState}
        src={pic}
        alt=""
      />
    )));

  const imageUploadField = count > 1 ? null : (
    <input
      id="input"
      className="addQInputs"
      type="file"
      name="pictures"
      onChange={setPhotoArray}
    />
  );
  const number = 5 - count;

  const productQuestionState = useContext(ProductQuestionContext);

  const onSubmit = (data) => {
    onClose();
    const aObj = {
      body: data.answer,
      name: data.name,
      email: data.email,
      photos: fakePhoto,
      question_id: id,
    };

    axios.post('/qa/questions/:question_id/answers', aObj)
      .then((response) => {
        if (response.data === 'Created') {
          productQuestionState.handleQuestionsFetch();
        }
      })
      .catch((err) => {
        console.log(err);
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
        <div>
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
            <div>
              {errors.answer && errors.answer.type === 'required' && (
              <span className="error" role="alert">You must enter an answer</span>
              )}
              {errors.answer && errors.answer.type === 'maxLength' && (
              <span className="error" role="alert">Max length exceeded</span>
              )}
            </div>

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
            <div>
              {errors.name && errors.name.type === 'required' && (
              <span className="error" role="alert">You must enter a name</span>
              )}
              {errors.name && errors.name.type === 'maxLength' && (
              <span className="error" role="alert">Max length exceeded</span>
              )}
            </div>
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
            <div>
              {errors.email && errors.email.type === 'required' && (
              <span className="error" role="alert">You must enter an email address</span>
              )}
              {errors.email && errors.email.type === 'maxLength' && (
              <span className="error" role="alert">Max length exceeded</span>
              )}
              {errors.email && errors.email.type === 'pattern' && (
              <span className="error" role="alert">This is not a valid email</span>
              )}
            </div>

            <label className="form-label" type="text">
              {' '}
              Upload Pictures (
              {number}
              )
              {' '}
            </label>
            <span>{imageUploadField}</span>
            <div>
              <span>{photoPreview}</span>
            </div>
            <input
              className="two-buttons"
              type="submit"
            />
          </form>
        </div>
        {children}
      </div>
    </>,
    document.getElementById('portal'),
  );
}
