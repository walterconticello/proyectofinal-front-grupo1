import { useContext, useState } from "react";
import { Button} from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SportCenterContext } from '../../context/CenterContext';

export const FormEditSportCenter = ({ field }) => {
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

      
      const[sportCenter , setSportCenter] = useState(field);
      
      const {updateSportCenter} = useContext(SportCenterContext);

      const initialValues = {
        ownerId: sportCenter.ownerId ,
        name: sportCenter.name,
        address: sportCenter.address,
        phone: sportCenter.phone,
        services: {
          bar: sportCenter.services.bar ,
          showers: sportCenter.services.showers,
          Grill: sportCenter.services.grill ,
          parking: sportCenter.services.parking ,
        },
        fields: sportCenter.field,
        photo: sportCenter.photo ,
        social: {
          facebook: sportCenter.social.facebook,
          instagram: sportCenter.social.instagram ,
        },
        latitude: sportCenter.latitude,
        location: sportCenter.location,
      };

    const handleEdit = (e) => {
        e.preventDefault()
        updateSportCenter(setSportCenter);
    }


  return (
    <div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleEdit}
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
        <Button variant="primary" type="submit">
            Guardar
          </Button>
      </Form>
    </Formik>
    </div>
  )
}
