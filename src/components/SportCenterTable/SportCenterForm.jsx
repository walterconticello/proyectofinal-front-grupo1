import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CenterContext } from "../../context/CenterContext";

import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Modal,
  Button,
} from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import { FaShower, FaHouzz, FaRestroom, FaGlassCheers } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  address: Yup.string()
    .required("Required")
    .min(3, "La dirección debe tener al menos 3 caracteres")
    .max(30, "La dirección debe tener como máximo 30 caracteres"),
  phone: Yup.string().required("Required"),
  services: Yup.object().shape({
    bar: Yup.boolean(),
    showers: Yup.boolean(),
    grill: Yup.boolean(),
    parking: Yup.boolean(),
  }),
  social: Yup.object().shape({
    facebook: Yup.string().min(3, "Debe tener al menos 3 caracteres"),
    instagram: Yup.string().min(3, "Debe tener al menos 3 caracteres"),
  }),
  location: Yup.object().shape({
    latitude: Yup.number(),
    longitude: Yup.number(),
  }),
});

const SportCenterForm = () => {
  const { postSportCenter, getSportCenter } = useContext(CenterContext);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const initialValues = {
    name: "",
    address: "",
    phone: "",
    services: {
      bar: false,
      showers: false,
      grill: false,
      parking: false,
      dressingRoom: false,
    },
    photo: null,
    social: {
      facebook: "",
      instagram: "",
    },
    location: {
      latitude: "",
      longitude: "",
    },
  };

  return (
    <Container>
      <Button
        onClick={handleShowModal}
        variant="btn add-button d-flex align-items-center justify-content-end m-2"
      >
        <MdAddCircle className="m-2" />
        Agregar Complejo
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Complejo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setIsLoading(true);
              try {
                console.log(values);
                await postSportCenter(values);
                setIsLoading(false);
                handleCloseModal();
                getSportCenter();
              } catch (e) {
                setIsLoading(false);
                console.log("error" + e);
              }
            }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12} lg={6}>
                    <BootstrapForm.Group>
                      <label className="form-label">Nombre</label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Mi complejo"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Dirección</label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Av. Siempre Viva 123"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Teléfono</label>
                      <Field
                        type="text"
                        name="phone"
                        placeholder="+54 9 381 000 1110"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Facebook</label>
                      <Field
                        type="text"
                        name="social.facebook"
                        placeholder="https://www.facebook.com/"
                        className="form-control"
                      />
                      <label className="form-label">Instagram</label>
                      <Field
                        type="text"
                        name="social.instagram"
                        placeholder="https://www.instagram.com/"
                        className="form-control"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={12} lg={6}>
                    <BootstrapForm.Group>
                      <label className="form-label">Servicios</label>
                      <Row className="mb-3 d-flex ">
                        <Col md={6}>
                          <label className="form-check d-flex">
                            <Field
                              type="checkbox"
                              name="services.showers"
                              className="form-label"
                            />
                            <FaShower size={23} /> Duchas
                          </label>
                          <label className="form-check d-flex ">
                            <Field
                              type="checkbox"
                              name="services.grill"
                              className="form-label"
                            />
                            <FaHouzz size={23} /> Parrillas
                          </label>
                          <label className="form-check d-flex ">
                            <Field
                              type="checkbox"
                              name="services.parking"
                              className="form-label"
                            />
                            <FaHouzz size={23} /> Estacionamiento
                          </label>
                        </Col>
                        <Col md={6}>
                          <label className="form-check d-flex">
                            <Field
                              type="checkbox"
                              name="services.dressingRoom"
                              className="form-label"
                            />
                            <FaRestroom size={23} /> Vestuario
                          </label>
                          <label className="form-check d-flex">
                            <Field
                              type="checkbox"
                              name="services.bar"
                              className="form-label"
                            />
                            <FaGlassCheers size={23} /> Bar
                          </label>
                        </Col>
                      </Row>
                      <ErrorMessage
                        name="services"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                      <label className="form-label">Imagen</label>
                      <input
                        type="file"
                        name="photo"
                        className="form-control mb-3"
                        onChange={(e) =>
                          setFieldValue("photo", e.target.files[0])
                        }
                      />
                      <ErrorMessage
                        name="photo"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                      <label className="form-label">Latitud</label>
                      <Field
                        type="text"
                        name="location.latitude"
                        className="form-control"
                        placeholder="Latitud"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Longitud</label>
                      <Field
                        type="text"
                        name="location.longitude"
                        className="form-control"
                        placeholder="Longitud"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
                <div className="btn-container d-flex justify-content-end">
                  <Button type="submit" className="btn add-button px-5">
                    Guardar
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SportCenterForm;
