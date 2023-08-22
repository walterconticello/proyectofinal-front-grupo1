import { useContext, useState } from "react";
import { useFormik } from "formik";
import {Form,FormGroup,FormControl,FormLabel, Button,Alert,} from "react-bootstrap";
import * as Yup from "yup";
import { FieldsContext} from "../../context/FieldContext";

const FromAddField = () => {

  const { addField } = useContext(FieldsContext);


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("El nombre es requerido")
      .min(3, "El nombre debe tener al menos 3 caracteres")
      .max(50, "El nombre no debe exceder los 50 caracteres"),
    openHour: Yup.date()
      .required("La hora de apertura es requerida")
      .min(0, "La hora de apertura no puede ser menor que 0")
      .max(23, "La hora de apertura no puede ser mayor que 23"),
    closeHour: Yup.date()
      .required("La hora de cierre es requerida")
      .min(0, "La hora de cierre no puede ser menor que 0")
      .max(23, "La hora de cierre no puede ser mayor que 23"),
    pricePerHour: Yup.number()
      .required("El precio por hora es requerido")
      .min(0, "El precio por hora no puede ser menor que 0")
      .max(10000, "El precio por hora no puede ser mayor que $10,000"),
    size: Yup.number()
      .required("El tamaño es requerido")
      .min(5, "El tamaño no puede ser menor que 5")
      .max(11, "El tamaño no puede ser mayor que 11"),
    isActive: Yup.boolean().required("Este campo es requerido"),
    idSportCenter: Yup.string().required(
      "El ID del centro deportivo es requerido"
    ),
  });

  const formik = useFormik({
    initialValues: field,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      addField(values);
      formik.resetForm();
    },
  });

  const [field, setField] = useState({
    name: "",
    openHour: new Date(),
    closeHour: new Date(),
    pricePerHour: 0,
    size: 0,
    isActive: true,
    idSportCenter: "OwnerId",
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit} noValidate>
        <FormGroup>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <FormControl
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <Alert variant="danger">{formik.errors.name}</Alert>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="openHour">Hora de Apertura</FormLabel>
          <FormControl
            type="date"
            id="openHour"
            name="openHour"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.openHour}
          />
          {formik.touched.openHour && formik.errors.openHour ? (
            <Alert variant="danger">{formik.errors.openHour}</Alert>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="closeHour">Horario de Cierre</FormLabel>
          <FormControl
            type="date"
            id="closeHour"
            name="closeHour"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.closeHour}
          />
          {formik.touched.closeHour && formik.errors.closeHour ? (
            <Alert variant="danger">{formik.errors.closeHour}</Alert>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="pricePerHour">Precio por hora</FormLabel>
          <FormControl
            type="number"
            id="pricePerHour"
            name="pricePerHour"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pricePerHour}
          />
          {formik.touched.pricePerHour && formik.errors.pricePerHour ? (
            <Alert variant="danger">{formik.errors.pricePerHour}</Alert>
          ) : null}
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="size">Cantidad de Jugadores Maximo</FormLabel>
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
    </div>
  );
};

export default FromAddField;
