import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CardDashboard.css";

const CardsDashboard = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <Link to={"/admin/SportCenter"} className="buy-button btn m-2">
          <Card id="cardDash">
            <Card.Body>
              <Card.Img variant="top" src="src\img\Complejos.png" />
              <Card.Title className="text-center pt-3">
                <h3>Complejos</h3>
              </Card.Title>
              <Card.Text>
                <strong>Complejos activos :</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/admin/Field"} className="buy-button btn m-2">
          <Card id="cardDash">
            <Card.Body>
              <Card.Img variant="top" src="src\img\Canchas.png" />
              <Card.Title className="text-center pt-3">
                <h3>Canchas</h3>
              </Card.Title>
              <Card.Text>
                <strong>Canchas activas :</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/admin/Reservation"} className="buy-button btn m-2">
          <Card id="cardDash">
            <Card.Body>
              <Card.Img variant="top" src="src\img\Reservas.png" />
              <Card.Title className="text-center pt-3">
                <h3>Reservas</h3>
              </Card.Title>
              <Card.Text>
                <strong>Reservas activas : </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/admin/Users"} className="buy-button btn m-2">
          <Card id="cardDash">
            <Card.Body>
              <Card.Img variant="top" src="src\img\Usuarios.png" />
              <Card.Title className="text-center pt-3">
                <h3>Usuarios</h3>
              </Card.Title>
              <Card.Text>
                <strong>Usuarios activos :</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/admin/products"} className="buy-button btn m-2">
          <Card id="cardDash">
            <Card.Body>
              <Card.Img variant="top" src="src\img\Carrito.png" />
              <Card.Title className="text-center pt-3">
                <h3>Productos</h3>
              </Card.Title>
              <Card.Text>
                <strong>Productos activos :</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default CardsDashboard;
