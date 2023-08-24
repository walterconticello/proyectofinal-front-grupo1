import {useState , useContext} from 'react'
import { Button , Modal } from 'react-bootstrap'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from 'yup';
import { SportCenterContext } from '../../context/CenterContext';

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

const ModalNewSportCenter = ({show , handleClose}) => {

    const {postSportCenter , getSportCenter} = useContext(SportCenterContext);

    const [isLoading , setIsLoading] = useState(false);
  

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

    const handleSubmit = async (values , { setSubmitting})  =>{
      setIsLoading(true);
      try{
        await postSportCenter(values);
      }catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false);
        setSubmitting(false);
      }
    }

  
    

  // const { postSportCenter } = useContext(SportCenterContext);

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton onHide={handleClose}>
          <Modal.Title>Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubbmitting, errors , touched , isValid }) => (
      <Form>
      <div className="mb-3">
          <label  className="form-label">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className="mb-3">
          <label  className="form-label">Direccion</label>
          <Field type="text" name="address" />
          <ErrorMessage name="address" component="div" placeholder="Direccion de Google Maps" />
        </div>
        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <Field type="text" name="phone" />
          <ErrorMessage name="phone" component="div" />
        </div>
        <div className="mb-3">
        <label className="form-label">Services:</label>
        <div className="mb-3">
          <label className="form-check">
            <Field type="checkbox" name="services.bar"  />
            Bar
          </label>
          <label className="form-check">
            <Field type="checkbox" name="services.showers"  />
            Showers
          </label>
          <label className="form-check ">
            <Field type="checkbox" name="services.Grill"  />
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
        <button type="submit">Submit</button>
      </Form>
      )};
    </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Save Changes</Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar Cancha
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default ModalNewSportCenter;