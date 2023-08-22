import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field } from "formik";
import "./Modal.css";

const ModalComplex = ({show , handleClose , id}) => {
  

  const initialValues = {
    name: "",
    openHour: "",
    closeHour: "",
    priceperhour: "",
    idSportCenter: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    handleClose();
  };

  return (
    <>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="capacidad">Capacidad</label>
                <Field
                  type="number"
                  id="capacidad"
                  name="capacidad"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <Field
                  type="text"
                  id="direccion"
                  name="direccion"
                  className="form-control"
                />
              </div>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComplex;
