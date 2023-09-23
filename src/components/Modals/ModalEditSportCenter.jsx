import { useContext, useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
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

const ModalEditSportCenter = ({ show, handleClose, editComplex }) => {
  const { complexs, getSportCenter, updateSportCenter } =
    useContext(CenterContext);
  const [complex, setComplex] = useState(editComplex);

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
    },
    fields: complex.fields,
    photo: complex.photo,
    social: {
      facebook: complex.social.facebook,
      instagram: complex.social.instagram,
    },
    location: complex.location,
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
            await updateSportCenter(complex._id, values);
            getSportCenter();
          }}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={12}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <Field type="text" name="name" className="form-control" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
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
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <Field type="text" name="phone" className="form-control" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="mb-3">
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
                  </div>
                  <div className="mb-3">
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
                  </div>
                  {/* Agregar campos de redes sociales aquí */}
                  <div className="mb-3">
                    <label className="form-label">Latitude</label>
                    <Field
                      type="number"
                      name="latitude"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="latitude"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <Field
                      type="text"
                      name="location"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                </Col>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ModalEditSportCenter;
