import React, { useContext, useState, useEffect } from "react";
import "./sportcenterCards.css";
import {
  FaFutbol,
  FaMapMarkerAlt,
  FaCarAlt,
  FaShower,
  FaGlassCheers,
  FaHouzz,
} from "react-icons/fa";
import { SportCenterContext } from "../../context/CenterContext";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SportCenterCards = () => {
  const { complexs } = useContext(SportCenterContext);

  const [filteredComplexs, setFilteredComplexs] = useState(complexs);
  const [filters, setFilters] = useState({
    searchTerm: "",
    Estacionamiento: false,
    Duchas: false,
    Bar: false,
    Parrillas: false,
  });

  const categoryIcons = {
    Estacionamiento: <FaCarAlt />,
    Duchas: <FaShower />,
    Bar: <FaGlassCheers />,
    Parrillas: <FaHouzz />,
  };

  useEffect(() => {
    const applyFilters = () => {
      const filtered = complexs.filter((complex) => {
        if (filters.searchTerm && !complex.name.includes(filters.searchTerm)) {
          return false;
        }
        if (filters.Estacionamiento && !complex.services.parking) {
          return false;
        }
        if (filters.Duchas && !complex.services.showers) {
          return false;
        }
        if (filters.Bar && !complex.services.bar) {
          return false;
        }
        if (filters.Parrillas && !complex.services.Grill) {
          return false;
        }
        return true;
      });

      setFilteredComplexs(filtered);
    };

    applyFilters();
  }, [filters, complexs]);

  return (
    <div className="sport-center-cards p-5">
      <Row>
        <Col md={4}>
          <div className="filters-sportcenter">
            <h4>Filtros</h4>
            <Form.Group controlId="searchTerm">
              <Form.Control
                type="text"
                placeholder="Buscar por nombre"
                value={filters.searchTerm}
                onChange={(e) =>
                  setFilters({ ...filters, searchTerm: e.target.value })
                }
              />
            </Form.Group>
            <div className="categories-filter">
              {Object.keys(categoryIcons).map((category, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  className="d-flex "
                  id={`has${category}`}
                  label={
                    <>
                      {categoryIcons[category]} {category}
                    </>
                  }
                  checked={filters[category]}
                  onChange={() =>
                    setFilters({ ...filters, [category]: !filters[category] })
                  }
                />
              ))}
            </div>
            <div className="btn-container">
              <button className="btn-reserve" onClick={() => applyFilters()}>
                Filtrar
              </button>
            </div>
          </div>
        </Col>

        <Col md={8}>
          {filteredComplexs.map((center, index) => (
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
