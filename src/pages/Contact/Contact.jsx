import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Row, Col } from "react-bootstrap";
import GoogleMapComponent from "../../components/GoogleMap/GoogleMapComponent";
import ContactInfo from "../../components/contact-info/ContactInfo";

const Contact = () => {
  return (
    <div>
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
      <ContactInfo />
    </div>
  );
};

export default Contact;
