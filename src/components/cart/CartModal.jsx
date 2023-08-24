import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "../ProductCards/ProductCards.css";
import { MdClose, MdDelete } from "react-icons/md";
const CartModal = ({ onClick, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cartItems]);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleModalOpen = () => {
    setShowModal(true);
    onClick();
  };
  const handleModalClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item._id} className="">
                <td>
                  <img src={item.image.url} alt={item.name} width="50" />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <button className="btn btn-warning" onClick={handleModalClose}>
          <MdClose />
        </button>
        <p>
          Total: <span className="border p-2">${cartTotal}</span>
          <button className="btn buy-button mx-2">Comprar</button>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
