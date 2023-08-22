import React from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import ProductTable from "../components/ProductTable/ProductTable";
import { Row, Col } from "react-bootstrap";
const Products = () => {
  return (
    <Row className="mx-auto justify-content-center my-5">
      <Col lg={9} md={9} sm={12}>
        <h4>Product Management</h4>
        <ProductTable />
        <ProductForm />
      </Col>
    </Row>
  );
};

export default Products;
