import { useState } from "react";
import { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ProductContext } from "../../context/ProductContext";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Modal,
  Button,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./productForm.css";
import { MdAddCircle } from "react-icons/md";
const categories = [
  "Balones",
  "Calzado",
  "Ropa",
  "Entrenamiento",
  "Accesorios",
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  description: Yup.string().required("La descripción es requerida"),
  price: Yup.number()
    .required("El precio es requerido")
    .positive("El precio debe ser positivo"),
  stock: Yup.number()
    .required("El stock es requerido")
    .integer("El stock debe ser un número entero")
    .min(0, "El stock mínimo es 0"),
  categories: Yup.string().required("Selecciona una categoría"),
  image: Yup.mixed().required("Seleccione una imagen"),
});

const ProductForm = () => {
  const { addProduct, getProducts } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <Container>
      <Button
        variant="btn add-button d-flex align-items-center justify-content-end m-2"
        onClick={handleShowModal}
      >
        <MdAddCircle className="m-2" />
        Agregar Producto
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Formik
            initialValues={{
              name: "",
              description: "",
              price: "",
              stock: "",
              categories: "",
              image: null,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              setIsLoading(true);
              try {
                await addProduct(values);
                setIsLoading(false);
                handleCloseModal();
                getProducts();
              } catch (error) {
                setIsLoading(false);
              }
            }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <label htmlFor="name">Nombre</label>
                      <Field
                        name="name"
                        className="form-control m-2 m-2"
                        placeholder="Nombre"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="description">Descripción</label>
                      <Field
                        name="description"
                        className="form-control m-2"
                        placeholder="Descripción"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="price">Precio</label>
                      <Field
                        name="price"
                        type="number"
                        className="form-control m-2"
                        placeholder="Precio"
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="stock">Stock</label>
                      <Field
                        name="stock"
                        type="number"
                        className="form-control m-2"
                        placeholder="Stock"
                      />
                      <ErrorMessage
                        name="stock"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>
                  </Col>
                  <Col md={6}>
                    <BootstrapForm.Group>
                      <label htmlFor="categories">Categorías</label>
                      <Field
                        as="select"
                        name="categories"
                        className="form-control m-2"
                      >
                        <option value="">Seleccionar categoría</option>
                        {categories.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="categories"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>

                    <BootstrapForm.Group>
                      <label htmlFor="image">Imagen</label>

                      <input
                        type="file"
                        className="m-2"
                        name="image"
                        onChange={(e) =>
                          setFieldValue("image", e.target.files[0])
                        }
                      />

                      <ErrorMessage
                        name="image"
                        component="div"
                        className="error-message"
                      />
                    </BootstrapForm.Group>
                  </Col>
                </Row>
                <div className="text-center mt-4">
                  <button type="submit" className="btn add-button px-5">
                    Guardar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </Container>
  );
};

export default ProductForm;
