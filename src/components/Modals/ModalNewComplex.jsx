import {useState , useContext} from 'react'
import { Button , Modal } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { SportCenterContext } from '../../context/CenterContext';

const ModalNewComplex = () => {
  const validationSchema = Yup.object().shape({
    ownerId: Yup.string().required('Required'),
    name: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
    address: Yup.string().required('Required').min(3, 'Must be at least 3 characters').max(30, 'Must be at most 30 characters'),
    phone: Yup.number().required('Required'),
    services: Yup.object().shape({
      bar: Yup.boolean().required('Required'),
      showers: Yup.boolean().required('Required'),
      Grill: Yup.boolean().required('Required'),
      parking: Yup.boolean().required('Required'),
    }),
    fields: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
    photo: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
    social: Yup.object().shape({
      facebook: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
      instagram: Yup.string().required('Required').min(3, 'Must be at least 3 characters'),
    }),
    latitude: Yup.number().required('Required').min(-90, 'Must be at least -90').max(90, 'Must be at most 90'),
    location: Yup.string().required('Required').min(3, 'Must be at least 3 characters').max(30, 'Must be at most 30 characters'),
  });

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
      photo: '',
      social: {
        facebook: '',
        instagram: '',
      },
      latitude: '',
      location: '',
    };

    

    const handleSubmit = async (e , values) => {
      e.preventDefault();
      postSportCenter(values)
      // Swal.fire({
      //   icon: "success",
      //   title: "Producto agregado",
      //   showConfirmButton: false,
      //   timer: 1500,
      e.target.reset();
      };
    

  const {postSportCenter} = useContext(SportCenterContext);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

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
      validateOnChange
      validateOnBlur
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
        <label>Services:</label>
        <div>
          <label>
            <Field type="checkbox" name="services.bar"  />
            Bar
          </label>
          <label>
            <Field type="checkbox" name="services.showers"  />
            Showers
          </label>
          <label>
            <Field type="checkbox" name="services.Grill"  />
            Grill
          </label>
          <label>
            <Field type="checkbox" name="services.parking" />
            Parking
          </label>
        </div>
        <ErrorMessage name="services" component="div" />
      </div>
      <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
          <label>Owner ID</label>
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
      <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>
        <div>
          <label>Owner ID</label>
          <Field type="text" name="ownerId" />
          <ErrorMessage name="ownerId" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onClick={handleClose}>Save Changes</Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar Cancha
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNewComplex;