import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductTable.css";
import { MdDelete } from "react-icons/md";
import ProductForm from "../ProductForm/ProductForm";
import EditProductForm from "../ProductForm/EditProductForm";
const ProductTable = () => {
  const { products, getProducts, deleteProduct, updateProducts } =
    useContext(ProductContext);
  const [showIdColumn, setShowIdColumn] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  const handleIdColumnToggle = () => {
    setShowIdColumn(!showIdColumn);
  };

  const handleEditModalShow = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setEditProduct(null);
    setShowEditModal(false);
  };

  return (
    <div className="table-container mx-auto ">
      <div className="switch-container d-flex  ">
        <input
          type="checkbox"
          checked={showIdColumn}
          onChange={handleIdColumnToggle}
        />
        <ProductForm />
      </div>
      <div className="table-responsive mx-auto text-center">
        <table>
          <thead>
            <tr>
              {showIdColumn && <th>ID</th>}
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                {showIdColumn && <td>{product._id}</td>}
                <td className="w-25">{product.name}</td>
                <td>${product.price}</td>
                <td className="w-25">{product.description}</td>
                <td>{product.stock}</td>
                <td>
                  <button onClick={() => handleEditModalShow(product)}>
                    Editar
                  </button>
                  <button
                    onClick={async () => {
                      await deleteProduct(product._id);
                      console.log("product deleted");
                      getProducts();
                    }}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editProduct && (
        <EditProductForm
          show={showEditModal}
          onHide={handleEditModalClose}
          product={editProduct}
          updateProducts={updateProducts}
        />
      )}
    </div>
  );
};

export default ProductTable;
