import React from "react";
import { useContext, useState, useEffect } from "react";
import "./sportcenterCards.css";
import { FaFutbol, FaMapMarkerAlt } from "react-icons/fa";
import { SportCenterContext } from "../../context/CenterContext";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const SportCenterCards = () => {
  const { complexs } = useContext(SportCenterContext);
  // console.log(complexs);
  return (
    <div className="sport-center-cards p-5">
      <Row>
        <Col md={4}>
          <div className="filters">Filtros</div>
        </Col>

        <Col md={8} className="">
          {complexs.map((center, index) => (
            <Card key={index} className="sportcenter-card border m-2">
              <Row>
                <Col md={4}>
                  <img
                    src={center.photo.url}
                    className="img-fluid"
                    alt={center.name}
                  />
                </Col>
                <Col md={8}>
                  <div className="icon-futbol d-flex align-items-center">
                    <FaFutbol size={25} className="mx-2" />
                    <p className="icon-text">Futbol 5</p>
                  </div>
                  <Card.Body>
                    <Card.Title className="card-cTitle">
                      {center.name}
                    </Card.Title>
                    <Card.Text className="card-cText d-flex align-items-center g-2">
                      <FaMapMarkerAlt size={20} />
                      {center.address}
                    </Card.Text>
                    <div className="btn-container justify-content-end">
                      <Link className="btn-reserve">Reserva aquí</Link>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default SportCenterCards;
