import { useState } from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import "./Modal.css";

const ModalCancha = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="" className="ms-1" onClick={handleShow}>
        <Image src="src\img\Editar.png" id="edit" rounded fluid />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className="formik-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="openHour">Open Hour</label>
                <Field
                  type="time"
                  id="openHour"
                  name="openHour"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="closeHour">Close Hour</label>
                <Field
                  type="time"
                  id="closeHour"
                  name="closeHour"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="priceperhour">Price per Hour</label>
                <div className="input-group">
                  <div className="input-group-text">$</div>
                  <Field
                    type="number"
                    id="priceperhour"
                    name="priceperhour"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="idSportCenter">Sport Center</label>
                <Field
                  type="text"
                  id="idSportCenter"
                  name="idSportCenter"
                  className="form-control-plaintext fs-4 fw-bolder"
                  value="SportCenter.name"
                />
              </div>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Save Changes</Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar Cancha
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCancha;
