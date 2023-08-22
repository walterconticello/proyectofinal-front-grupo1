import { useContext, useState } from "react";
import { Modal, Button} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import CenterContext, { SportCenterContext } from '../../context/CenterContext';

export const FormEditSportCenter = ({editSportCenter}) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required('El nombre es requerido')
          .min(3, 'El nombre debe tener al menos 3 caracteres')
          .max(50, 'El nombre no debe exceder los 50 caracteres'),
        openHour: Yup.date()
          .required('La hora de apertura es requerida')
          .min(0, 'La hora de apertura no puede ser menor que 0')
          .max(23, 'La hora de apertura no puede ser mayor que 23'),
        closeHour: Yup.date()
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
      
      const[SportCenter , setSportCenter] = useState(editSportCenter);
      
      const {updateSportCenter} = useContext(CenterContext);

      const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    };

    const handleEdit = (e) => {
        e.preventDefault()
        updateSportCenter(setSportCenter);
    }


  return (
    <div>FormEditSportCenter</div>
  )
}
