import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { useForm } from "react-hook-form";

export default function AddAnswerModal({ open, children, onClose, question, id }) {
  if (!open) return null;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [showThumbs, setShowThumbs] = useState(false)
  var thumbs
  if(showThumbs){
      thumbs = <img src={selectedFile} className="thumbnail"></img>
  }
  return ReactDom.createPortal(
    <>
      <div className="overlay-styes" />
      <div className="add-question-modal">
        <h1 className="form-headings"> Submit Your Answer</h1>
        <h2 className="form-headings">About [Product Name]</h2>
        <span className="close" onClick={onClose}></span>
        <h3 className="form-headings">{question}</h3>
        <form className="addQuestionForm" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-label" type="text"> Your Answer</label>

          <input
           name="answer"
          className="addQInputs"
          placeholder="Enter your answer..."
          type="text"
          aria-invalid={errors.answer ? "true" : "false"}
            {...register("answer", {
              required: true,
              maxLength: 1000,
              message: "error message"
            })}
          />
           {errors.answer && errors.answer.type === "required" && (
              <span className="error" role="alert">You must enter an answer</span>
              )}
             {errors.answer && errors.answer.type  === "maxLength" && (
              <span className="error" role="alert">Max length exceeded</span>
             )}



          <label className="form-label" type="text"> Your Nickname</label>

          <input
          type="text"
          name="nickName"
          className="addQInputs"
          placeholder="Example: jackson11!"
          {...register("nickName", {
            required: true,
            maxLength: 60,
            message: "error message"
          })}
          />

          {errors.nickName && errors.nickName.type === "required" && (
              <span className="error" role="alert">You must enter a name</span>
              )}
             {errors.nickName && errors.nickName.type  === "maxLength" && (
              <span className="error" role="alert">Max length exceeded</span>
             )}


          <label className="form-label" type="text"> Your Email</label>

          <input
            className="addQInputs"
            type="text"
            placeholder="Example: joe@schmoe.com"
            name="email"
            {...register("email", {
              required: true,
              maxLength: 60,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />

             {errors.email && errors.email.type === "required" && (
              <span className="error" role="alert">You must enter an email address</span>
              )}
             {errors.email && errors.email.type  === "maxLength" && (
              <span className="error" role="alert">Max length exceeded</span>
             )}
             {errors.email && errors.email.type  === "pattern" && (
              <span className="error" role="alert">This is not a valid email</span>
             )}

          <label className="form-label" type="text"> Upload Pictures </label>
          <input
          className="addQInputs"
          type="file"
          name="pictures"
          onChange={(e) => {
            setShowThumbs(true)
            setSelectedFile(URL.createObjectURL(e.target.files[0]))}}
            {...register("pictures")}
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
