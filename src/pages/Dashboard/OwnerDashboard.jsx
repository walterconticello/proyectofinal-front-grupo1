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
import { MdAddCircle, MdEditSquare } from "react-icons/md";
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
import { FieldsContext } from "../../context/FieldContext";
import ModalEditSportCenter from "../../components/Modals/ModalEditSportCenter";
import FieldsTable from "../../components/FieldsTable/FieldsTable";
import ModalNewField from "../../components/Modals/ModalNewField";
const OwnerDashboard = () => {
  const [loadingCenter, setLoadingCenter] = useState(true);
  const [loadingCenterFields, setLoadingCenterFields] = useState(true);
  const { user, getAuth } = useContext(AuthContext);

  const { getFieldsBySportCenterId } = useContext(FieldsContext);
  const userId = user._id;
  const { getSportCenterOwner, owner } = useContext(CenterContext);
  //   console.log(userId);
  const center = owner[0];
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  useEffect(() => {
    getSportCenterOwner(userId)
      .then(() => setLoadingCenter(false))
      .catch((error) => {
        console.error(
          "Error al obtener el centro deportivo del propietario:",
          error
        );
        setLoadingCenter(false);
      });
  }, [userId]);

  useEffect(() => {
    getAuth();
  }, []);
  useEffect(() => {
    if (center && center._id) {
      getFieldsBySportCenterId(center._id)
        .then(() => setLoadingCenterFields(false))
        .catch((error) => {
          console.error(
            "Error al obtener las canchas del centro deportivo:",
            error
          );
          setLoadingCenterFields(false);
        });
    }
  }, [center]);
  // console.log(center);

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
        <h1 className="h3 my-3 text-center">Administracion - Owner</h1>
        <Col md={3} sm={12} className="">
          <Menu className="sideBarDashboard my-3">
            <MenuItem className="sidebar-dashboard-button m-2 d-flex justify-content-center">
              <button
                className="d-flex align-items-center p-2 "
                onClick={() => setShowModal(true)}
              >
                <span>Añadir cancha</span>
                <MdAddCircle size={23} className="mx-3" />
              </button>
            </MenuItem>
            <MenuItem className="sidebar-dashboard-button m-2 d-flex justify-content-center">
              <button
                className="d-flex align-items-center p-2 "
                onClick={() => setShowEditModal(true)}
              >
                <span>Editar complejo</span>
                <MdEditSquare size={23} className="mx-3" />
              </button>
            </MenuItem>
          </Menu>
        </Col>
        <Col md={9} sm={12}>
          <Card className="sportcenter-card border my-2 ">
            {loadingCenter ? (
              <p>Cargando centro deportivo...</p>
            ) : center ? (
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
                      <FaMapMarkerAlt className="mx-2" size={20} />
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
              "no se encontró el centro deportivo"
            )}
          </Card>
          <hr />
          {loadingCenterFields ? (
            <p>Cargando canchas...</p>
          ) : (
            <FieldsTable center={center} />
          )}
        </Col>
      </Row>
      {showModal && (
        <ModalNewField
          show={showModal}
          handleClose={() => setShowModal(false)}
          owner={owner}
        />
      )}
      {showEditModal && (
        <ModalEditSportCenter
          show={showEditModal}
          handleClose={() => setShowEditModal(false)}
          editComplex={center}
          userId={userId}
        />
      )}
    </div>
  );
};

export default OwnerDashboard;
