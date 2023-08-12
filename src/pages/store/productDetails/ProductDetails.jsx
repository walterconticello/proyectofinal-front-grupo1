import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";
import "./productDetails.css";
import { MdPayments, MdGrade, MdTaskAlt } from "react-icons/md";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";
const ProductDetails = () => {
  const { getProduct, selectedProduct } = useContext(ProductContext);
  const { productId } = useParams();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProduct(productId);
  }, []);

  if (!selectedProduct) {
    return <p>Loading...</p>;
  }
  const addToCart = (product) => {
    if (cart.some((item) => item._id === product._id)) {
      const updatedCart = cart.filter((item) => item._id !== product._id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const isProductInCart = (product) =>
    cart.some((item) => item._id === product._id);

  return (
    <div className="container mt-5">
      <Row>
        <Col lg={6} className="mb-4">
          <img
            src={selectedProduct.image.url}
            alt={selectedProduct.name}
            className="img-fluid border"
          />
        </Col>
        <Col lg={6} className="my-5">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <p className="product-price">${selectedProduct.price}</p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button
              variant="primary"
              className={`btn px-3 mx-2 mt-3 ${
                isProductInCart(selectedProduct) ? "added" : ""
              }`}
              onClick={() => addToCart(selectedProduct)}
            >
              {isProductInCart(selectedProduct) ? (
                <MdOutlineRemoveShoppingCart />
              ) : (
                <MdOutlineShoppingCart />
              )}
            </Button>
            <Button className="buy-button px-5 mt-3">Buy now</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4} className="mb-4 text-center">
          <div className="mb-3">
            <MdPayments style={{ color: "#71B641" }} size={50} />
          </div>
          <h4>Pago seguro</h4>
          <p>Tu informacion es segura con nosotros.</p>
        </Col>
        <Col md={4} className="mb-4 text-center">
          <div className="mb-3">
            <MdGrade style={{ color: "#71B641" }} size={50} />
          </div>
          <h4>Calidad</h4>
          <p>Ofrecemos productos de alta calidad</p>
        </Col>
        <Col md={4} className="mb-4 text-center">
          <div className="mb-3">
            <MdTaskAlt style={{ color: "#71B641" }} size={50} />
          </div>
          <h4>Garantia</h4>
          <p>Tu satisfaccion es garantizada</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
