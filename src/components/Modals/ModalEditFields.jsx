import { useState , useContext , useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldsContext } from "../../context/FieldContext"
import "./Modal.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no debe exceder los 50 caracteres"),
  openHour: Yup.string().matches(
    /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    'Formato de hora inválido'
  ).required("La hora de apertura es requerida"),
  closeHour: Yup.string().matches(
    /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    'Formato de hora inválido'
  ).required("La hora de cierre es requerida"),
  pricePerHour: Yup.number()
    .required("El precio por hora es requerido")
    .min(0, "El precio por hora no puede ser menor que 0")
    .max(10000, "El precio por hora no puede ser mayor que $10,000"),
  size: Yup.number()
    .required("El tamaño es requerido")
    .min(5, "El tamaño no puede ser menor que 5")
    .max(22, "El tamaño no puede ser mayor que 11"),
});


const ModalEditField = ({ show, handleClose, editField }) => {

  const { updateField, } = useContext(FieldsContext);

  const [field, setField] = useState(editField);

  const initialValues = {
    name: field?.name || '',
    openHour: field?.openHour || '',
    closeHour: field?.closeHour || '',
    pricePerHour: field?.pricePerHour || '',
    size: field?.size || '',
  };

  const handleChange = async (values) => {
    console.log("enviado");
    try {
      await updateField(values);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    setField(editField);
  }, [editField]);

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
            onSubmit={handleChange}
          >
            <Form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <Field type="text" name="name" disabled={true} />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Hora de apertura</label>
                <Field type="text" name="openHour" />
                <ErrorMessage name="openHour" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Horario de Cierre</label>
                <Field type="text" name="closeHour" />
                <ErrorMessage name="closeHour" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">pricePerHour</label>
                <Field type="text" name="pricePerHour" />
                <ErrorMessage name="pricePerHour" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Cantidad de jugadores maximo:</label>
                <Field type="text" name="size" />
                <ErrorMessage name="si" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">IdSportCenter</label>
                <Field type="text" name="IdSportCenter" />
                <ErrorMessage name="IdSportCenter" component="div" />

              </div>
              <Button variant="primary" type="submit" >
                Guardar
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </Form>
          </Formik>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditField;