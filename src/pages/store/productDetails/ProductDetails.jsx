import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";
import { useSalesContext } from "../../../context/SalesContext";
import { AuthContext } from "../../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./productDetails.css";
import { MdPayments, MdGrade, MdTaskAlt, MdCancel } from "react-icons/md";
import { FaCreditCard, FaMoneyBill, FaBitcoin, FaPaypal } from "react-icons/fa";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";

const ProductDetails = () => {
  const { getProduct, selectedProduct } = useContext(ProductContext);
  const { productId } = useParams();
  const [cart, setCart] = useState([]);
  const { addSale } = useSalesContext();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getProduct(productId);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setQuantity(1);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleBuyNow = () => {
    if (!user || !user._id) {
      console.log(
        "User is not authenticated. Please log in to make a purchase."
      );
      return;
    }
    handleCloseModal();
    const saleData = {
      productId: selectedProduct._id,
      userId: user._id,
      quantity,
      totalPrice: total.toFixed(2),
    };

    addSale(saleData)
      .then(() => {
        console.log("Sale created successfully.");
      })
      .catch((error) => {
        console.error("Failed to create sale:", error);
      });
  };

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

  const handleIncrement = () => {
    if (quantity < 25) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const total = selectedProduct.price * quantity;
  return (
    <div className="container bg-white p- mt-5">
      <Row>
        <Col lg={6} className="mb-4">
          <img
            src={selectedProduct.image.url}
            alt={selectedProduct.name}
            className="img-fluid  border p-5"
          />
        </Col>
        <Col lg={6} className="my-5">
          <h2>{selectedProduct.name}</h2>
          <hr />
          <p className="product-price">${selectedProduct.price}</p>
          <h5 className="product-category">{selectedProduct.categories}</h5>
          <p>{selectedProduct.description}</p>
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
            <Button className="buy-button px-5 mt-3" onClick={handleShowModal}>
              Buy now
            </Button>
          </div>
          <hr />
          <div className="paymentmethods ">
            <h5>Metodos de pago</h5>
            <Row className=" g-2 d-flex justify-content-between">
              <Col md={6} sm={6} xs={6} className="payment ">
                <FaCreditCard size={30} className="payment-icon" />
                Tarjeta
              </Col>
              <Col md={6} sm={6} xs={6} className="payment ">
                <FaMoneyBill size={30} className="payment-icon" />
                Efectivo
              </Col>
              <Col md={6} sm={6} xs={6} className="payment ">
                <FaBitcoin size={30} className="payment-icon" />
                Bitcoin
              </Col>
              <Col md={6} sm={6} xs={6} className="payment ">
                <FaPaypal size={30} className="payment-icon" />
                Paypal
              </Col>
            </Row>
          </div>
        </Col>
        {/* Modal */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Compra</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>{selectedProduct.name}</h5>
            <span className="d-flex ">
              <p>Precio: </p>
              <h5 className="mx-3">${selectedProduct.price}</h5>
            </span>
            <Form.Group
              controlId="quantity"
              className="d-flex align-items-center"
            >
              <Form.Label className="mr-3 align-items-center">
                Cantidad:
              </Form.Label>
              <div className="mx-3 d-flex">
                <Button variant="outline-success  " onClick={handleDecrement}>
                  -
                </Button>
                <Form.Control
                  type="number"
                  min="1"
                  max="25"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="text-center w-auto mx-3"
                />
                <Button variant="outline-success" onClick={handleIncrement}>
                  +
                </Button>
              </div>
            </Form.Group>
            <hr />
            <span className="d-flex align-items-center justify-content-end">
              <p className="p-2">Total: </p>
              <h5 className="mx-3 border p-2">${total.toFixed(2)}</h5>
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              className="cancel-btn"
              onClick={handleCloseModal}
            >
              <MdCancel />
            </Button>
            <Button
              className="buy-button"
              onClick={handleBuyNow}
              disabled={!user}
            >
              Buy now
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
      <Row className="mt-5">
        <Col
          md={4}
          className="mb-4 text-center p-2 d-flex flex-column align-items-center"
        >
          <div className="mb-3">
            <MdPayments style={{ color: "#71B641" }} size={50} />
          </div>
          <h4>Pago seguro</h4>
          <p>Tu informacion es segura con nosotros.</p>
        </Col>
        <Col
          md={4}
          className="mb-4 text-center p-2 d-flex flex-column align-items-center"
        >
          <div className="mb-3">
            <MdGrade style={{ color: "#71B641" }} size={50} />
          </div>
          <h4>Calidad</h4>
          <p>Ofrecemos productos de alta calidad</p>
        </Col>
        <Col
          md={4}
          className="mb-4 text-center p-2 d-flex flex-column align-items-center"
        >
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
