import React from "react";
import ProductTable from "../components/ProductTable/ProductTable";
import { Row, Col } from "react-bootstrap";
const Products = () => {
  return (
    <Row className="mx-auto justify-content-center my-5">
      <Col lg={9} md={9} sm={12}>
        <h4>Product Management</h4>
        <hr />
        <ProductTable />
      </Col>
    </Row>
  );
};

export default Products;
