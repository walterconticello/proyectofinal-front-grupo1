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
    <div className="container-form h-100 ">
      <h1 className="title">Contactanos</h1>
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
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <Field type="email" id="email" name="email" className="input" />
              {touched.email && errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div className="form-group">
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
