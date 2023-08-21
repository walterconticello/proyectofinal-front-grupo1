import React from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import ProductTable from "../components/ProductTable/ProductTable";
const Products = () => {
  return (
    <div className="container d-flex flex-column justify-content-center">
      <h3>Admin Dashboard</h3>
      <h1>Product Management</h1>
      <ProductTable />
      <ProductForm />
    </div>
  );
};

export default Products;
