import { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./contactForm.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe tener letras y espacios")
      .required("El nombre es requerido"),
    email: Yup.string().email("Email invalido").required("Email es requerido"),
    message: Yup.string()
      .required("Message is required")
      .test("characterLimit", "Maximo 200 caracteres", (value) => {
        return !value || value.length <= 200;
      }),
  });

  const [messageLength, setMessageLength] = useState(0);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l98j15g",
        "template_j2zcx7q",
        form.current,
        "AEYEb1Mx0uSTLvMxZ"
      )
      .then((result) => {})
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container-form-contact h-100 p-3">
      <div className="head d-flex flex-column align-items-center">
        <h1 className="title-contact m-3">Contactanos</h1>
        <p className="w-75 text-center">
          ¿Tenés preguntas? Nuestro equipo está para ayudarte
        </p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values, setFieldValue }) => (
          <Form ref={form} onSubmit={sendEmail} className="my-3">
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
                onChange={(e) => {
                  const newValue = e.target.value;
                  setMessageLength(newValue.length);

                  // Actualiza el valor del campo de mensaje en Formik
                  setFieldValue("message", newValue);
                }}
              />
              <div className="character-count text-end">
                {200 - messageLength}
              </div>
              {touched.message && errors.message && (
                <div className="error-message">{errors.message}</div>
              )}
            </div>
            <button type="submit" className="submit-button" value="Send">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
