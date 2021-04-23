import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useProductQuestionState } from "../ProductQuestionManager/useProductQuestionState.jsx"

export default function Modal({ open, children, onClose, productId }) {

  if (!open) return null;

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    var qObj = {
      body: data.body,
      name: data.name,
      email: data.name,
      product_id: productId
    }
        axios.post(`/qa/${productId}`, qObj)
        .then((res) => useProductQuestionState(productId))
        .catch((err) => {
          if(err){
             console.log(err)
          }
        })
    alert('sucess!')

};

  return ReactDom.createPortal(
    <>
      <div className="overlay-styes"/>
      <div className="add-question-modal">
        <div className="form-headings-all">
          <h1 className="form-headings"> Ask Your Question</h1>
          <h2 className="form-headings">About [Product Name]</h2>
        </div>
        <span className="close" onClick={onClose}></span>

        <form
        className="addQuestionForm"
        onSubmit={handleSubmit(onSubmit)}
        >

          <label
            className="form-label"
            type="text">
            Your Question*
          </label>

          <input
            name="body"
            className="addQInputs"
            type="text"
            placeholder="Enter your question..."
            aria-invalid={errors.name ? "true" : "false"}
            {...register("body", {
              required: true,
              maxLength: 1000,
              message: "error message"
            })}
          />

              {errors.body && errors.body.type === "required" && (
              <span className="error" role="alert">You must enter a question</span>
              )}
             {errors.body && errors.body.type  === "maxLength" && (
              <span className="error" role="alert">Max length exceeded</span>
             )}

          <label
            className="form-label"
            type="text">
            Your  Nickname*
          </label>

          <input
            type="text"
            name="name"
            className="addQInputs"
            placeholder="Example: jackson11!"
            {...register("name", {
              required: true,
              maxLength: 60,
              message: "error message"
            })}
          />

              {errors.name && errors.name.type === "required" && (
              <span className="error" role="alert">You must enter a name</span>
              )}
             {errors.name && errors.name.type  === "maxLength" && (
              <span className="error" role="alert">Max length exceeded</span>
             )}

           <div
            className="privacy">
            For privacy reasons, do not use your full name or email address
           </div>

          <label
            className="form-label"
            type="text">
            Your Email*
          </label>

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

          <div
            className="privacy">
            For authentication reasons, you will not be emailed
          </div>


          <input className="two-buttons" type="submit" />

        {children}
        </form>
      </div>
    </>,
    document.getElementById('portal'),
  );
}

