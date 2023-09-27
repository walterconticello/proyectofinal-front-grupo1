import { useContext, useState, useEffect } from "react";
import {
  FaFutbol,
  FaMapMarkerAlt,
  FaCarAlt,
  FaShower,
  FaGlassCheers,
  FaHouzz,
  FaRestroom,
  FaSistrix,
} from "react-icons/fa";
import {
  Container,
  Figure,
  Button,
  Image,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { CenterContext } from "../../context/CenterContext";
import { AuthContext } from "../../context/AuthContext";
const OwnerDashboard = () => {
  const { user } = useContext(AuthContext);
  const userId = user._id;
  const { getSportCenterOwner, owner } = useContext(CenterContext);
  //   console.log(userId);

  useEffect(() => {
    getSportCenterOwner(userId);
  }, []);
  const center = owner[0];
  console.log(center);

  const categoryIcons = {
    parking: <FaCarAlt size={28} />,
    showers: <FaShower size={28} />,
    bar: <FaGlassCheers size={28} />,
    grill: <FaHouzz size={28} />,
    dressingRoom: <FaRestroom size={28} />,
  };

  return (
    <div className="m-4">
      <img
        className="p-3"
        src="https://res.cloudinary.com/dmmviigbv/image/upload/v1695773625/g7injeyk9dzflrszxptr.png"
      />
      <Row>
        <h1 className="h3 m-3 text-center">Administracion - Owner</h1>
        <Col md={3} sm={12} className="">
          <Menu className="sideBarDashboard my-3">
            <MenuItem>
              <Link>Añadir cancha</Link>
            </MenuItem>
            <MenuItem>
              <Link>Editar complejo</Link>
            </MenuItem>
          </Menu>
        </Col>
        <Col md={9} sm={12}>
          <Card className="sportcenter-card border my-2 ">
            {center ? (
              <Row className="">
                <Col md={4} className="">
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
                    <div className="services d-flex">
                      {Object.entries(center.services).map(
                        ([service, isActive]) => (
                          <span
                            key={service}
                            className={`m-2 p-2  ${
                              isActive ? "service-active" : "service-inactive"
                            }`}
                          >
                            {categoryIcons[service]}
                          </span>
                        )
                      )}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            ) : (
              "no se encontro"
            )}
          </Card>
          <hr />
        </Col>
      </Row>
    </div>
  );
};

export default OwnerDashboard;
