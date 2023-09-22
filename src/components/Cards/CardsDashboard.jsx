import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CardDashboard.css";

const CardsDashboard = () => {
  return (
    <>
      <div className="cardContain">
          <Card  className="cardDash" >
          <Link to={"/admin/SportCenter"}>
            <Card.Body>
              <Card.Img src="src\img\Complejos.png" className="cardImg" />
              <Card.Title >
                <h3>Complejos</h3>
              </Card.Title>
              
            </Card.Body>
            </Link>
          </Card>
          <Card className="cardDash">
          <Link to={"/admin/Field"}>
            <Card.Body>
              <Card.Img variant="top" src="src\img\Canchas.png" className="cardImg" />
              <Card.Title >
                <h3>Canchas</h3>
              </Card.Title>
            </Card.Body>
            </Link>
          </Card>
        
        
          <Card  className="cardDash">
          <Link to={"/admin/Reservation"} >
            <Card.Body>
              <Card.Img variant="top" src="src\img\Reservas.png" className="cardImg" />
              <Card.Title>
                <h3>Reservas</h3>
              </Card.Title>
            </Card.Body>
            </Link>
          </Card>

        
          <Card className="cardDash">
          <Link to={"/admin/Users"} >
            <Card.Body>
              <Card.Img variant="top" src="src\img\Usuarios.png" className="cardImg" />
              <Card.Title >
                <h3>Usuarios</h3>
              </Card.Title>
            </Card.Body>
            </Link>
          </Card>

        
          <Card className="cardDash">
          <Link to={"/admin/products"} >
            <Card.Body>
              <Card.Img variant="top" src="src\img\Carrito.png" className="cardImg" />
              <Card.Title className="text-center pt-1">
                <h3>Productos</h3>
              </Card.Title>
            </Card.Body>
            </Link>
          </Card>
        
      </div>
    </>
  );
};

export default CardsDashboard;
