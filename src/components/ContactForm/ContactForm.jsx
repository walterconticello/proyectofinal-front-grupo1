import { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./contactForm.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    sendEmail(values);
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "El nombre solo debe tener letras y espacios")
      .required("El nombre es requerido"),
    user_email: Yup.string()
      .email("Email inválido")
      .required("Email es requerido"),
    message: Yup.string()
      .required("El mensaje es requerido")
      .test("Máximo 200 caracteres", (value) => {
        return !value || value.length <= 200;
      }),
  });

  const [messageLength, setMessageLength] = useState(0);
  const form = useRef();
  const sendEmail = (values) => {
    console.log(values);
    console.log(form.current);
    emailjs
      .sendForm(
        "service_l98j15g",
        "template_j2zcx7q",
        form.current,
        "AEYEb1Mx0uSTLvMxZ"
      )
      .then((result) => {
        toast.success("Mensaje enviado con éxito");
      })
      .catch((error) => {
        toast.error("Error al enviar el formulario. :(");
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
        initialValues={{ user_name: "", user_email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, values, setFieldValue }) => (
          <Form ref={form} className="my-3">
            <div className="form-group w-100">
              <label htmlFor="name" className="label">
                Name:
              </label>
              <Field type="text" id="name" name="user_name" className="input" />
              {touched.user_name && errors.user_name && (
                <div className="error-message">{errors.user_name}</div>
              )}
            </div>
            <div className="form-group w-100">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="user_email"
                className="input"
              />
              {touched.user_email && errors.user_email && (
                <div className="error-message">{errors.user_email}</div>
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
                  setFieldValue("message", newValue);
                  if (newValue.length >= 200) {
                    e.target.value = newValue.slice(0, 200);
                    setMessageLength(200);
                  }
                  setFieldValue("message", e.target.value);
                }}
              />
              <div className="character-count text-end">
                {200 - messageLength}
              </div>
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
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
