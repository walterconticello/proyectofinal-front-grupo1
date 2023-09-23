import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CenterContext } from "../../context/CenterContext";
import "./Modal.css";
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
    .min(3, 'El nombre debe tener al mas 3 caracteres"'),
  address: Yup.string()
    .required("Required")
    .min(3, 'La Direccion debe tener al mas 3 caracteres"')
    .max(30, 'La Direccion debe tener al menos 30 caracteres"'),
  phone: Yup.number().required("Required"),
  services: Yup.object().shape({
    bar: Yup.boolean(),
    showers: Yup.boolean(),
    Grill: Yup.boolean(),
    parking: Yup.boolean(),
  }),
  social: Yup.object().shape({
    facebook: Yup.string().min(3, "Debe tener al mas 3 caracteres"),
    instagram: Yup.string().min(3, "Debe tener al mas 3 caracteres"),
  }),
  latitude: Yup.number(),
  location: Yup.string()
    .min(0, "Debe tener al mas 3 caracteres")
    .max(30, "Debe tener al mas 3 caracteres"),
});

const ModalEditSportCenter = ({ show, handleClose, editComplex }) => {
  // console.log(editComplex);

  // const UpdateFormComplex = { editComplex, handleClose };

  const {
    complexs,
    getSportCenter,
    postSportCenter,
    deleteSportCenter,
    updateSportCenter,
  } = useContext(CenterContext);
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
  const handleChange = async (values) => {
    console.log("enviado");
    try {
      await updateSportCenter(values);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  // const maxFileSize = 10 * 1024 * 1024; // 10MB

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complejo deportivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-container mb-3 d-flex">
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
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <Field type="text" name="name" className="form-label" />
                    <ErrorMessage name="name" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <Field type="text" name="address" className="form-label" />
                    <ErrorMessage name="address" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <Field type="text" name="phone" className="form-label" />
                    <ErrorMessage name="phone" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Services:</label>
                    <div className=" d-flex ">
                      <label className="form-check d-flex">
                        <Field
                          type="checkbox"
                          name="services.showers"
                          className="form-label"
                        />
                        <FaShower /> Duchas
                      </label>
                      <label className="form-check d-flex ">
                        <Field
                          type="checkbox"
                          name="services.Grill"
                          className="form-label"
                        />
                        <FaHouzz /> Parrillas
                      </label>
                      <label className="form-check d-flex">
                        <Field
                          type="checkbox"
                          name="services.dressingRoom"
                          className="form-label"
                        />
                        <FaRestroom /> Vestuario
                      </label>
                      <label className="form-check d-flex">
                        <Field
                          type="checkbox"
                          name="services.bar"
                          className="form-label"
                        />
                        <FaGlassCheers /> Bar
                      </label>
                    </div>
                    <ErrorMessage name="services" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Imagen</label>
                    <input
                      type="file"
                      name="photo"
                      className="form-label"
                      onChange={(e) =>
                        setFieldValue("image", e.target.files[0])
                      }
                    />
                    <ErrorMessage name="photo" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Social:</label>
                    <div>
                      <label className="form-label">Facebook:</label>
                      <Field
                        type="text"
                        name="social.facebook"
                        className="form-label"
                      />
                      <ErrorMessage name="social.facebook" component="div" />
                    </div>
                    <div>
                      <label className="form-label">Instagram:</label>
                      <Field
                        type="text"
                        name="social.instagram"
                        className="form-label"
                      />
                      <ErrorMessage name="social.instagram" component="div" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Latitude</label>
                    <Field
                      type="number"
                      name="latitude"
                      className="form-label"
                    />
                    <ErrorMessage name="latitude" component="div" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Location</label>
                    <Field type="text" name="location" className="form-label" />
                    <ErrorMessage name="location" component="div" />
                  </div>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleChange}
                  >
                    Guardar
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                    Cancel
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditSportCenter;
