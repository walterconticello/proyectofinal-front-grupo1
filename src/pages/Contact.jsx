import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import { Row, Col } from "react-bootstrap";
import GoogleMapComponent from "../components/GoogleMap/GoogleMapComponent";
// import "../components/contactForm/contactForm.css";
const Contact = () => {
  return (
    <Row className="w-100 m-0 g-0">
      <Col xs={12} sm={12} md={12} lg={4}>
        <ContactForm />
      </Col>
      <Col xs={12} sm={12} md={12} lg={8}>
        <div className="map-container w-100">
          <GoogleMapComponent />
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
