import { useContext, useEffect, useState } from "react";
import { useFormik , Formik } from "formik";
import {Form,FormGroup,FormControl,FormLabel, Button,Alert,} from "react-bootstrap";
import * as Yup from "yup";
import { FieldsContext} from "../../context/FieldContext";

const FormEditField = ( id ) => {

  const { getFieldById , updateField} = useContext(FieldsContext);


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

  const initialValues = {
    name : "",
    openHour : "",
    closeHour : "",
    pricePerHour: "",
    size : 5 ,
  };

  const handleEdit = (e) => {
    e.preventDefault()
    updateField(setSportCenter);
  }

  useEffect(() =>{
    const field = getFieldById(id)
  } , [id]);

  const formik = useFormik({
    initialValues: "",
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      addField(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleEdit}
    >
      <Form onSubmit={formik.handleSubmit} noValidate>
  <FormGroup className="mb-3">
    <FormLabel htmlFor="name">Nombre</FormLabel>
    <FormControl
      type="text"
      id="name"
      name="name"
      placeholder="Futbol 5"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
    />
    {formik.touched.name && formik.errors.name ? (
      <Alert variant="danger">{formik.errors.name}</Alert>
    ) : null}
  </FormGroup>
  <FormGroup className="mb-3">
    <FormLabel htmlFor="openHour">Hora de Apertura</FormLabel>
    <FormControl
      type="string"
      id="openHour"
      name="openHour"
      placeholder="HH:mm"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.openHour}
    />
    {formik.touched.openHour && formik.errors.openHour ? (
      <Alert variant="danger">{formik.errors.openHour}</Alert>
    ) : null}
  </FormGroup>
  <FormGroup className="mb-3">
    <FormLabel htmlFor="closeHour">Horario de Cierre</FormLabel>
    <FormControl
      type="string"
      id="closeHour"
      name="closeHour"
      placeholder="HH:mm"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.closeHour}
    />
    {formik.touched.closeHour && formik.errors.closeHour ? (
      <Alert variant="danger">{formik.errors.closeHour}</Alert>
    ) : null}
  </FormGroup>
  <FormGroup className="mb-3">
    <FormLabel htmlFor="pricePerHour">Precio por hora</FormLabel>
    <FormControl
      type="number"
      id="pricePerHour"
      name="pricePerHour"
      placeholder="1000"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.pricePerHour}
    />
    {formik.touched.pricePerHour && formik.errors.pricePerHour ? (
      <Alert variant="danger">{formik.errors.pricePerHour}</Alert>
    ) : null}
  </FormGroup>
  <FormGroup className="mb-3">
    <FormLabel htmlFor="size">Cantidad de Jugadores Máximo</FormLabel>
    <FormControl
      type="number"
      id="size"
      name="size"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.size}
    />
    {formik.touched.size && formik.errors.size ? (
      <Alert variant="danger">{formik.errors.size}</Alert>
    ) : null}
  </FormGroup>
  <Button type="submit">Enviar</Button>
</Form>
</Formik>
    </div>
  );
};

export default FormEditField;
