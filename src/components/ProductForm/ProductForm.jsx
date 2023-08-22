import { Formik, Form, Field } from "formik";

const ProductForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          stock: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field name="name" placeholder="name" />
            <Field name="description" placeholder="description" />
            <Field name="price" placeholder="price" />
            <Field name="stock" placeholder="stock" />
            <button type="submit">save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
