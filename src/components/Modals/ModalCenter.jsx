import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage , useFormik } from "formik";
import * as Yup from "yup";
import { SportCenterContext } from "../../context/CenterContext";
import "./Modal.css";

const ModalComplex = ({ show, handleClose, editComplex }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("El nombre es requerido")
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(50, "El nombre no debe exceder los 50 caracteres"),
    openHour: Yup.number()
      .required("La hora de apertura es requerida")
      .min(0, "La hora de apertura no puede ser menor que 0")
      .max(23, "La hora de apertura no puede ser mayor que 23"),
    closeHour: Yup.number()
      .required("La hora de cierre es requerida")
      .min(0, "La hora de cierre no puede ser menor que 0")
      .max(23, "La hora de cierre no puede ser mayor que 23"),
    pricePerHour: Yup.number()
      .required("El precio por hora es requerido")
      .min(0, "El precio por hora no puede ser menor que 0")
      .max(10000, "El precio por hora no puede ser mayor que $10,000"),
    size: Yup.number()
      .required("El tamaño es requerido")
      .min(5, "El tamaño no puede ser menor que 5")
      .max(11, "El tamaño no puede ser mayor que 11"),
    isActive: Yup.boolean().required("Este campo es requerido"),
    idSportCenter: Yup.string().required(
      "El ID del centro deportivo es requerido"
    ),
  });

  // const UpdateFormComplex = { editComplex, handleClose };

  const [complex, setComplex] = useState(editComplex);

  const { updateSportCenter } = useContext(SportCenterContext);


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
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit:(values) => {
      console.log("Valores de Formik-->", values);
      updateSportCenter(values);
    }, });

  const maxFileSize = 10 * 1024 * 1024; // 10MB

  return (
    <>
      <Modal show={show} >
        <Modal.Header onHide={handleClose} closeButton>
          <Modal.Title>Editar Complejo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange
              validateOnBlur
              onSubmit={async (values) => {
                console.log("Valores de Formik-->", values);
                 updateSportCenter(values)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <Field
                      type="text"
                      name="name"
                      maxLength={50}
                      className={`form-control ${
                        touched.name && errors.name ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Direccion
                    </label>
                    <Field
                      type="text"
                      name="address"
                      maxLength={200}
                      className={`form-control ${
                        touched.address && errors.address ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Telefono
                    </label>
                    <Field
                      type="number"
                      name="phone"
                      maxLength={50}
                      className={`form-control ${
                        touched.phone && errors.phone ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Servicios:</label>
                    <div>
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="services.bar"
                          id="checkbox-bar"
                          className={`form-check-input ${
                            touched.services && errors.services
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <label
                          htmlFor="checkbox-bar"
                          className="form-check-label"
                        >
                          Bar
                        </label>
                      </div>
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="services.showers"
                          id="checkbox-showers"
                          className={`form-check-input ${
                            touched.services && errors.services
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <label
                          htmlFor="checkbox-showers"
                          className="form-check-label"
                        >
                          Showers
                        </label>
                      </div>
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="services.Grill"
                          id="checkbox-grill"
                          className={`form-check-input ${
                            touched.services && errors.services
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <label
                          htmlFor="checkbox-grill"
                          className="form-check-label"
                        >
                          Grill
                        </label>
                      </div>
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="services.parking"
                          id="checkbox-parking"
                          className={`form-check-input ${
                            touched.services && errors.services
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <label
                          htmlFor="checkbox-parking"
                          className="form-check-label"
                        >
                          Parking
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="services"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="fotos" className="form-label">
                      Fotos (maximo 10MB)
                    </label>
                    <Field
                      type="file"
                      id="fotos"
                      name="fotos"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file && file.size > maxFileSize) {
                          event.currentTarget.value = "";
                          alert(
                            "El tamaño del archivo es demasiado grande. El tamaño máximo es 10MB."
                          );
                        } else {
                          setComplex({
                            ...complex,
                            fotos: file,
                          });
                        }
                      }}
                      className={`form-control ${
                        touched.fotos && errors.fotos ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      name="fotos"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Social:</label>
                    <div>
                      <label htmlFor="social.facebook" className="form-label">
                        Facebook:
                      </label>
                      <Field
                        type="text"
                        name="social.facebook"
                        maxLength={200}
                        className={`form-control ${
                          touched.social?.facebook && errors.social?.facebook
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="social.facebook"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div>
                      <label htmlFor="social.instagram" className="form-label">
                        Instagram:
                      </label>
                      <Field
                        type="text"
                        name="social.instagram"
                        maxLength={200}
                        className={`form-control ${
                          touched.social?.instagram && errors.social?.instagram
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="social.instagram"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
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
