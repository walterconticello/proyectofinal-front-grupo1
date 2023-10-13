import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CenterContext } from "../../context/CenterContext";
import { AuthContext } from "../../context/AuthContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { useEffect } from "react";
import MapComponent from "./MapComponent";

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
    latitude: Yup.string(),
    longitude: Yup.string(),
  }),
});

const SportCenterForm = () => {
  const { getUsers, users, updateUser } = useContext(AuthContext);
  const { postSportCenter, getSportCenter } = useContext(CenterContext);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const initialValues = {
    name: "",
    address: "",
    phone: "",
    ownerId: "",
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
        variant="btn add-button d-flex align-items-center "
      >
        Agregar Complejo
        <MdAddCircle className="m-2" />
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="p-3" closeButton>
          <Modal.Title>Agregar Complejo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setIsLoading(true);
              try {
                if(!values.phone.startsWith("+54")){
                  const phone = "+54" + values.phone;
                  values.phone = phone;
                }
                if((latitude!== null) && (longitude!== null)){
                  values.location.latitude = latitude;
                  values.location.longitude = longitude;
                }
                setLatitude(null);
                setLongitude(null);
                await postSportCenter(values);
                setIsLoading(false);
                handleCloseModal();
                getSportCenter();
                toast.success("👌 Complejo creado exitosamente!", {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } catch (e) {
                setIsLoading(false);
                console.log("error" + e);
              }
              try {
                setIsLoading(true);
                await updateUser(values.ownerId, values, true);
                setIsLoading(false);
              } catch (e) {
                console.log(e);
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
                      <label className="form-label">Propietario</label>
                      <Field
                        as="select"
                        name="ownerId"
                        className="form-control"
                      >
                        <option value="" disabled>
                          Seleccione un propietario
                        </option>
                        {users.map((user) => (
                          <option key={user._id} value={user._id}>
                            {user.username}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="ownerId"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col className="my-2">
                    <div className="mb-3">
                      <b>Seleccione la ubicación:</b>
                    </div>
                    <div className="d-flex justify-content-center">
                      <MapComponent latitude={latitude} longitude={longitude} setLatitude={setLatitude} setLongitude={setLongitude}></MapComponent>
                    </div>
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
