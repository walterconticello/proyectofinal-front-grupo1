import { useContext, useEffect, useState } from "react";
import { Modal, Form as BootstrapForm, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldsContext } from "../../context/FieldContext";
import "./Modal.css";
import { AuthContext } from "../../context/AuthContext";
import { CenterContext } from "../../context/CenterContext";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no debe exceder los 50 caracteres"),
  openHour: Yup.string()
    .matches(/^([01]?[0-9]|2[0-3])$/, "Formato de hora inválido")
    .required("La hora de apertura es requerida"),
  closeHour: Yup.string()
    .matches(/^([01]?[0-9]|2[0-3])$/, "Formato de hora inválido")
    .required("La hora de cierre es requerida"),
  pricePerHour: Yup.number()
    .required("El precio por hora es requerido")
    .min(0, "El precio por hora no puede ser menor que 0")
    .max(10000, "El precio por hora no puede ser mayor que $10,000"),
  size: Yup.number()
    .required("El tamaño es requerido")
    .min(5, "El tamaño no puede ser menor que 5")
    .max(22, "El tamaño no puede ser mayor que 11"),
  image: Yup.mixed().required("Seleccione una imagen"),
});

const ModalNewField = ({ show, handleClose, owner }) => {
  const { postField, getFields, getFieldsBySportCenterId } =
    useContext(FieldsContext);
  const { getSportCenterOwner } = useContext(CenterContext);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  let idSportCenter = owner[0]._id;
  const initialValues = {
    name: "",
    openHour: "",
    closeHour: "",
    pricePerHour: "",
    size: "",
    image: null,
    isActive: true,
    idSportCenter: idSportCenter,
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setIsLoading(true);
              try {
                await postField(values).then(() => {
                  getFieldsBySportCenterId(idSportCenter);
                });
                setIsLoading(false);
                handleClose();
              } catch (error) {
                setIsLoading(false);
              }
            }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <label htmlFor="name">Nombre</label>
                      <Field
                        name="name"
                        className="form-control m-2 m-2"
                        placeholder="Nombre"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="openHour">Hora de apertura</label>
                      <Field
                        name="openHour"
                        type="number"
                        className="form-control m-2"
                        placeholder="Hora de apertura"
                      />
                      <ErrorMessage
                        name="openHour"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="closeHour">Hora de cierre</label>
                      <Field
                        name="closeHour"
                        type="number"
                        className="form-control m-2"
                        placeholder="closeHour"
                      />
                      <ErrorMessage
                        name="closeHour"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="pricePerHour">Precio por hora</label>
                      <Field
                        name="pricePerHour"
                        type="number"
                        className="form-control m-2"
                        placeholder="Precio por hora"
                      />
                      <ErrorMessage
                        name="pricePerHour"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group>
                      <label htmlFor="size">Cantidad de jugadores</label>
                      <Field
                        name="size"
                        type="number"
                        className="form-control m-2"
                        placeholder="Futbol 11 , 5 , 7"
                      />
                      <ErrorMessage
                        name="size"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="image">Imagen</label>

                      <input
                        type="file"
                        className="m-2"
                        name="image"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                      />

                      <ErrorMessage
                        name="image"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <button type="submit" className="btn add-button px-5">
                    Guardar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNewField;
