import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ProductContext } from "../../context/ProductContext";
import { useContext } from "react";
import { useEffect } from "react";

const allCategories = [
  "Balones",
  "Calzado",
  "Ropa",
  "Entrenamiento",
  "Accesorios",
];

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(45, "El nombre no debe exceder los 45 caracteres"),
  description: Yup.string()
    .required("La descripción es requerida")
    .min(5, "La descripción debe tener al menos 5 caracteres")
    .max(255, "La descripción no debe exceder los 255 caracteres"),
  price: Yup.number()
    .required("El precio es requerido")
    .min(0, "El precio no puede ser menor que 0")
    .max(100000, "El precio no puede ser mayor que $100,000"),
  stock: Yup.number()
    .required("El stock es requerido")
    .min(0, "El stock no puede ser menor que 0")
    .max(10000, "El stock no puede ser mayor que 10,000"),
  categories: Yup.string().required("Selecciona una categoría"),
  image: Yup.mixed().required("Seleccione una imagen"),
});

const ModalNewProduct = ({ show, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addProduct, getProducts } = useContext(ProductContext);

  const initialValues = {
    name: "",
    description: "",
    price: "",
    stock: "",
    categories: "", // Inicializa como una cadena vacía
    image: null,
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleFormSubmit = async (values) => {
    setIsLoading(true);

    try {
      console.log(values);
      await addProduct(values);
      console.log("Product posted successfully");
      getProducts();
    } catch (error) {
      console.error("Error posting product:", error);
    }

    setIsLoading(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <label htmlFor="name">Nombre</label>
                <Field name="name" type="text" className="form-control" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="description">Descripción</label>
                <Field
                  name="description"
                  type="text"
                  className="form-control"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="price">Precio</label>
                <Field name="price" type="number" className="form-control" />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="stock">Stock</label>
                <Field name="stock" type="number" className="form-control" />
                <ErrorMessage
                  name="stock"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="categories">Categorías</label>
                <Field
                  name="categories"
                  as="select" // Usa un select en lugar de un input de texto
                  className="form-control"
                >
                  <option value="">Selecciona una categoría</option>
                  {allCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="categories"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Form.Group>
                <label htmlFor="image">Imagen</label>
                <input
                  type="file"
                  name="image"
                  className="form-control mb-3"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-danger"
                />
              </Form.Group>

              <Button type="submit" className="btn add-button">
                {isLoading ? "Cargando..." : "Guardar"}
              </Button>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default ModalNewProduct;
