import { useContext} from 'react'
import { Button , Modal } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { SportCenterContext } from '../../context/CenterContext';
import "./Modal.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
  address: Yup.string().required('Required').min(3, 'Must be at least 3 characters').max(30, 'Must be at most 30 characters'),
  phone: Yup.number().required('Required'),
  services: Yup.object().shape({
    bar: Yup.boolean(),
    showers: Yup.boolean(),
    Grill: Yup.boolean(),
    parking: Yup.boolean(),
  }),
  social: Yup.object().shape({
    facebook: Yup.string().min(3, 'Must be at least 3 characters'),
    instagram: Yup.string().min(3, 'Must be at least 3 characters'),
  }),
  latitude: Yup.number().min(-90, 'Must be at least -90').max(90, 'Must be at most 90'),
  location: Yup.string().min(3, 'Must be at least 3 characters').max(30, 'Must be at most 30 characters'),
});

const ModalNewSportCenter = ({ show, handleClose }) => {

    const {postSportCenter} = useContext(SportCenterContext);
  

  const initialValues = {
    ownerId: '', //idUser Json
    name: '',
    address: '',
    phone: '',
    services: {
      bar: false,
      showers: false,
      Grill: false,
      parking: false,
    },
    fields: '',
    openHour :'',
    closeHour : '',
    photo: '',
    social: {
      facebook: '',
      instagram: '',
    },
    latitude: '',
    location: '',
  };

    

  const handleSubmit = async (values) => {
    console.log("enviado");
    try {
      await postSportCenter(values);
      handleClose(); // Close the modal on successful submission
    } catch (error) {
      console.log(error);
    }
  };
    

  // const { postSportCenter } = useContext(SportCenterContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-container mb-3">
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="modal-form">
              <div className="mb-3">
                <Form className="form-label">Owner ID</Form>
                <Field type="text" name="ownerId"className="form-control"  disabled={true} />
                <ErrorMessage name="ownerId" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <Field type="text" name="name" className="form-control" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <Field type="text" name="address" className="form-control" />
                <ErrorMessage name="address" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <Field type="text" name="phone" className="form-control" />
                <ErrorMessage name="phone" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Services:</label>
                <div className="mb-3">
                  <label className="form-check">
                    <Field type="checkbox" name="services.bar" className="check-control" />
                    Bar
                  </label>
                  <label className="form-check">
                    <Field type="checkbox" name="services.showers"  className="check-control"/>
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
                <Field type="text" name="photo" className="form-control" />
                <ErrorMessage name="photo" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Social:</label>
                <div>
                  <label className="form-label">Facebook:</label>
                  <Field type="text" name="social.facebook"  className="form-control"/>
                  <ErrorMessage name="social.facebook" component="div" />
                </div>
                <div>
                  <label className="form-label">Instagram:</label>
                  <Field type="text" name="social.instagram" className="form-control" />
                  <ErrorMessage name="social.instagram" component="div" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Latitude</label>
                <Field type="number" name="latitude" className="form-control" />
                <ErrorMessage name="latitude" component="div" />
              </div>
              <div className="mb-3">
                <label className="form-label">Location</label>
                <Field type="text" name="location" className="form-control" />
                <ErrorMessage name="location" component="div" />
              </div>
              <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" >
            Guardar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </div>
            </Form>
          </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNewSportCenter;