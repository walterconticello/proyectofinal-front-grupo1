import { useContext, useState } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Container,
  Form as BootstrapForm,
} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

const ModalEditSportCenter = ({ show, handleClose, editComplex, userId }) => {
  const { complexs, getSportCenter, updateSportCenter, getSportCenterOwner } =
    useContext(CenterContext);
  const [complex, setComplex] = useState(editComplex);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const initialValues = {
    ownerId: complex.ownerId,
    name: complex.name,
    address: complex.address,
    phone: complex.phone,
    services: {
      bar: complex.services.bar,
      showers: complex.services.showers,
      grill: complex.services.grill,
      parking: complex.services.parking,
      dressingRoom: complex.services.dressingRoom,
    },
    photo: complex.photo,
    social: {
      facebook: complex.social.facebook,
      instagram: complex.social.instagram,
    },
    location: {
      latitude: complex.location.latitude,
      longitude: complex.location.longitude,
    },
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Complejo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            setIsLoading(true);
            try {
              console.log("values ", values);
              console.log("sportCenter id ", complex._id);
              await updateSportCenter(complex._id, values);
              setIsLoading(false);
              handleClose();
              getSportCenter();
              await getSportCenterOwner(userId);
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
                <Button type="submit" className="btn add-button px-5 my-3">
                  Guardar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ModalEditSportCenter;
