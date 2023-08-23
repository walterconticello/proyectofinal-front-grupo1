import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SportCenterContext } from "../../context/CenterContext";
import "./Modal.css";

const ModalComplex = ({ show, handleClose, editComplex }) => {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('El nombre es requerido')
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(50, 'El nombre no debe exceder los 50 caracteres'),
    openHour: Yup.number()
      .required('La hora de apertura es requerida')
      .min(0, 'La hora de apertura no puede ser menor que 0')
      .max(23, 'La hora de apertura no puede ser mayor que 23'),
    closeHour: Yup.number()
      .required('La hora de cierre es requerida')
      .min(0, 'La hora de cierre no puede ser menor que 0')
      .max(23, 'La hora de cierre no puede ser mayor que 23'),
    pricePerHour: Yup.number()
      .required('El precio por hora es requerido')
      .min(0, 'El precio por hora no puede ser menor que 0')
      .max(10000, 'El precio por hora no puede ser mayor que $10,000'),
    size: Yup.number()
      .required('El tamaño es requerido')
      .min(5, 'El tamaño no puede ser menor que 5')
      .max(11, 'El tamaño no puede ser mayor que 11'),
    isActive: Yup.boolean().required('Este campo es requerido'),
    idSportCenter: Yup.string().required('El ID del centro deportivo es requerido'),
  });

  const UpdateFormComplex = ({ editComplex, handleClose });

  const [complex, setComplex] = useState(editComplex);

  const { updateSportCenter } = useContext(SportCenterContext);

  const handleChange = (e) => {
    setComplex({
      ...complex,
      [e.target.name]: e.target.value
    });
  }

  const handleEdit = (e) => {
    e.preventDefault();
    updateSportCenter(complex);
    handleClose();
  }

  const initialValues = {
    ownerId: complex.ownerId,
    name: complex.name,
    address: complex.address,
    phone: complex.phone,
    services: {
      bar: false,
      showers: false,
      Grill: false,
      parking: false,
    },
    fields: complex.fields,
    photo: complex.photo,
    social: {
      facebook: complex.facebook,
      instagram: complex.instagram,
    },
    location: complex.location,
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    handleClose();
  };

  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Complejo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div>
                  <label>Owner ID</label>
                  <Field type="text" name="ownerId" />
                  <ErrorMessage name="ownerId" component="div" />
                </div>
                <div>
                  <label>Nombre</label>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div>
                  <label>Direccion</label>
                  <Field type="text" name="address" />
                  <ErrorMessage name="address" component="div" />
                </div>
                <div>
                  <label>Telefono</label>
                  <Field type="number" name="phone" />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div>
                  <label>Servicios:</label>
                  <div>
                    <label>
                      <Field type="checkbox" name="services.bar" checked={complex.services.bar} />
                      Bar
                    </label>
                    <label>
                      <Field type="checkbox" name="services.showers" checked={complex.services.showers} />
                     Duchas
                    </label>
                    <label>
                      <Field type="checkbox" name="services.Grill" checked={complex.services.Grill} />
                      Asador
                    </label>
                    <label>
                      <Field type="checkbox" name="services.parking" checked={complex.services.parking} />
                      Estacionamiento
                    </label>
                  </div>
                  <ErrorMessage name="services" component="div" />
                </div>
                <div>
                  <label>Fotos</label>
                  <Field type="text" name="ownerId" />
                  <ErrorMessage name="ownerId" component="div" />
                </div>
                <div>
                  <label>Social:</label>
                  <div>
                    <label>Facebook:</label>
                    <Field type="text" name="social.facebook" />
                    <ErrorMessage name="social.facebook" component="div" />
                  </div>
                  <div>
                    <label>Instagram:</label>
                    <Field type="text" name="social.instagram" />
                    <ErrorMessage name="social.instagram" component="div" />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </Form>
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
