import { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

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

 const FromAddField = () => {

    const formik = useFormik({
        initialValues: field,
        validationSchema,
        onSubmit: (values) =>{
            //logica de form
        }
    })

    const [field , setField] = useState({
        name: "",
        openHour: "",
        closeHour: "",
        pricePerHour: "",
        size: "",
        isActive: true,
        idSportCenter: "OwnerId",
    })
    const handleChange = (e) =>{
        setField({...field , [e.target]})
    }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="openHour">Hora de Apertura</label>
        <input
          type="date"
          id="openHour"
          name="openHour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.openHour}
        />
        {formik.touched.openHour && formik.errors.openHour ? (
          <div>{formik.errors.openHour}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="closeHour">Horario de Cierre</label>
        <input
          type="date"
          id="closeHour"
          name="closeHour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.closeHour}
        />
        {formik.touched.closeHour && formik.errors.closeHour ? (
          <div>{formik.errors.closeHour}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="pricePerHour">Precio por hora</label>
        <input
          type="date"
          id="pricePerHour"
          name="pricePerHour"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pricePerHour}
        />
        {formik.touched.pricePerHour && formik.errors.pricePerHour ? (
          <div>{formik.errors.pricePerHour}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="size">Cantidad de Jugadores Maximo</label>
        <input
          type="number"
          id="size"
          name="size"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.size}
        />
        {formik.touched.size && formik.errors.size ? (
          <div>{formik.errors.size}</div>
        ) : null}
      </div>    
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FromAddField;
