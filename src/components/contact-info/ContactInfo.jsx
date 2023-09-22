import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaFacebook, FaMapMarker } from "react-icons/fa";
import "./contactInfo.css"; // Asegúrate de crear este archivo CSS

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Row className="mx-4">
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="contact-block d-flex flex-column h-100">
            <FaPhone className="contact-icon" />
            <h3 className="py-1">Telefono</h3>

            <p className="contact-desc">
              ¿Quieres hablar con nosotros directamente? No dudes en llamarnos.
            </p>
            <p className="contact-text py-2">+54 9 381 000123</p>
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="contact-block d-flex flex-column h-100">
            <FaEnvelope className="contact-icon" />
            <h3 className="py-1">Email</h3>
            <p className="contact-desc">
              ¿Tienes alguna pregunta? ¡Escríbenos un correo electrónico!
            </p>
            <p className="contact-text py-2">rolling@gmail.com</p>
          </div>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
          <div className="contact-block d-flex flex-column h-100">
            <FaMapMarker className="contact-icon" />
            <h3 className="py-1">Ubicación</h3>
            <p className="contact-desc ">
              ¿Quieres conocer nuestras instalaciones? Encuéntranos en el mapa y
              visítanos.
            </p>
            <p className="contact-text py-2">Gral. Paz 576, T400</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
