import { useState, useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { CenterContext } from "../../context/CenterContext";
import {
  FaFutbol,
  FaMapMarkerAlt,
  FaCarAlt,
  FaShower,
  FaGlassCheers,
  FaHouzz,
  FaRestroom,
  FaSistrix,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Modal,
  Button,
} from "react-bootstrap";
import { MdAddCircle } from "react-icons/md";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  address: Yup.string()
    .required("Required")
    .min(3, "La dirección debe tener al menos 3 caracteres")
    .max(30, "La dirección debe tener como máximo 30 caracteres"),
  phone: Yup.number().required("Required"),
  services: Yup.object().shape({
    bar: Yup.boolean(),
    showers: Yup.boolean(),
    Grill: Yup.boolean(),
    parking: Yup.boolean(),
  }),
  social: Yup.object().shape({
    facebook: Yup.string().min(3, "Debe tener al menos 3 caracteres"),
    instagram: Yup.string().min(3, "Debe tener al menos 3 caracteres"),
  }),
  latitude: Yup.number(),
  location: Yup.string()
    .min(3, "Debe tener al menos 3 caracteres")
    .max(30, "Debe tener como máximo 30 caracteres"),
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
      bar: "",
      showers: "",
      grill: "",
      parking: "",
    },
    fields: "",
    photo: "",
    social: {
      facebook: "",
      instagram: "",
    },
    location: "",
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
                await postSportCenter(values);
                setIsLoading(false);
                handleCloseModal();
                getSportCenter();
              } catch (e) {
                setIsLoading(false);
              }
            }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={12} lg={6}>
                    <BootstrapForm.Group>
                      <label className="form-label">Nombre</label>
                      <Field type="text" name="name" className="form-control" />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Direccion</label>
                      <Field
                        type="text"
                        name="address"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label className="form-label">Telefono</label>
                      <Field
                        type="text"
                        name="phone"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={12} lg={6}>
                    <BootstrapForm.Group>
                      <label className="form-label">Services:</label>
                      <div className="d-flex flex-wrap align-items-center justify-content-start">
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
                            name="services.Grill"
                            className="form-label"
                          />
                          <FaHouzz size={23} /> Parrillas
                        </label>
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
                      </div>
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
                        className="form-control"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                      />
                      <ErrorMessage
                        name="photo"
                        component="div"
                        className="text-danger"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default SportCenterForm;
