import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const product = products.find((product) => product._id === productId);

  if (!product) {
    return <p>Couldnt find the product.</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          {/* Agregar más detalles aquí */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
