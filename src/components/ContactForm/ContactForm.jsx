import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./contactForm.css";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="container-form-contact h-100 ">
      <div className="head d-flex flex-column align-items-center">
        <h1 className="title-contact m-3">Contactanos</h1>
        <p className="w-75 text-center">
          ¿Tenés preguntas? Nuestro equipo está para ayudarte
        </p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ touched, errors }) => (
          <Form className="my-3">
            <div className="form-group w-100">
              <label htmlFor="name" className="label">
                Name:
              </label>
              <Field type="text" id="name" name="name" className="input" />
              {touched.name && errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
            </div>
            <div className="form-group w-100">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <Field type="email" id="email" name="email" className="input" />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-group w-100">
              <label htmlFor="message" className="label">
                Message:
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="4"
                className="input"
              />
              {touched.message && errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
