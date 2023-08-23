import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormAddSportCenter = () => {
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

    const [sportCenter , setSportCenter] = useState({
      ownerId: '',
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
    });

    const handleChange = (e) => {
      setSportCenter({ ...sportCenter, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      postSportCenter(sportCenter)
      // Swal.fire({
      //   icon: "success",
      //   title: "Producto agregado",
      //   showConfirmButton: false,
      //   timer: 1500,
      e.target.reset();
      };
  return (
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
            <Field type="checkbox" name="services.bar" checked={sportCenter.services.bar} />
            Bar
          </label>
          <label>
            <Field type="checkbox" name="services.showers" checked={sportCenter.services.showers} />
            Showers
          </label>
          <label>
            <Field type="checkbox" name="services.Grill" checked={sportCenter.services.Grill} />
            Grill
          </label>
          <label>
            <Field type="checkbox" name="services.parking" checked={sportCenter.services.parking} />
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
    </div>
  );
};

export default FormAddSportCenter;