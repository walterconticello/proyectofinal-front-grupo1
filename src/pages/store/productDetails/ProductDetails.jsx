import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";

const ProductDetails = () => {
  const { getProduct, selectedProduct } = useContext(ProductContext);
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId);
  }, []);

  console.log(selectedProduct);
  if (!selectedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="img-fluid"
          /> */}
        </div>
        <div className="col-md-6">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p>Precio: ${selectedProduct.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
