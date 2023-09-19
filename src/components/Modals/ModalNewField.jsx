import { useContext } from "react";
import { Modal, Button} from "react-bootstrap";
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

const ModalCancha = ({show , handleClose}) => {

  const {addField} = useContext(FieldsContext);


  const handleSubmit = async (values) => {
    console.log("enviado");
    try {
      await addField(values);
      handleClose(); // Close the modal on successful submission
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
            initialValues={""}
            validationSchema={validationSchema}
            onSubmit={handleSubmit
            }
          >
            <Form>
              <div className="mb-3">
                <label className="form-label">Owner ID</label>
                <Field type="text" name="ownerId"  disabled={true} />
                <ErrorMessage name="ownerId" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <Field type="text" name="address" />
                <ErrorMessage name="address" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Services:</label>
                <div className="mb-3">
                  <label className="form-check">
                    <Field type="checkbox" name="services.bar" />
                    Bar
                  </label>
                  <label className="form-check">
                    <Field type="checkbox" name="services.showers" />
                    Showers
                  </label>
                  <label className="form-check ">
                    <Field type="checkbox" name="services.Grill" />
                    Grill
                  </label>
                  <label className="form-check">
                    <Field type="checkbox" name="services.parking" />
                    Parking
                  </label>
                </div>
                <ErrorMessage name="services" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <Field type="text" name="photo" />
                <ErrorMessage name="photo" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Social:</label>
                <div>
                  <label className="form-label">Facebook:</label>
                  <Field type="text" name="social.facebook" />
                  <ErrorMessage name="social.facebook" component="div" />
                </div>
                <div>
                  <label className="form-label">Instagram:</label>
                  <Field type="text" name="social.instagram" />
                  <ErrorMessage name="social.instagram" component="div" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Latitude</label>
                <Field type="number" name="latitude" />
                <ErrorMessage name="latitude" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <Field type="text" name="location" />
                <ErrorMessage name="location" component="div" />
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
          <Button type="submit"  onClick={handleClose} >Save Changes</Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar Cancha
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCancha;