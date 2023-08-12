import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalCancha from "../Modals/ModalCanchas";
import { Image } from "react-bootstrap";
import "./Card.css"

const CardField = () => {
  // const id = id;

  return (
    <>
      {/* Aqui hay que agregar un bucle que sigle segun la cantidad de complejos  */}
      <div>
        <Card style={{ width: "16rem" }} >
          <Card.Img variant="top" src="src\img\Ejemplos\2.jpg" />
          <Card.Body className="d-flex flex-column">
            <Card.Title>Field.Name</Card.Title>
            <Card.Text>Field.Description</Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="success" size="sm">Ver Cancha</Button>
              {/* Aquí abajo se le pasará el parámetro Id */}
              <ModalCancha />
              <Button variant="" >
                <Image src="src\img\Delete.png" id="edit" rounded fluid />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardField;
