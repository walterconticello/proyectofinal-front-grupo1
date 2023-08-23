import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalCancha from "../Modals/ModalCanchas";
import { Image } from "react-bootstrap";
import { FieldsContext } from "../../context/FieldContext"
import "./Card.css";

const CardField = () => {

  const { fields , deleteField } = useContext(FieldsContext);
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (id) =>{
    console.log(id);
    deleteField(id);
  }

  return (
    <>
       {fields === undefined ? "No hay canchas" : fields.map((field) => (
        <>
       <div key={field.id}>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="src\img\Ejemplos\2.jpg" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{field.name}</Card.Title>
                  <Card.Text>{field.price}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" size="sm">
                      Ver Cancha
                    </Button>
                    <Button variant="" id="edit" onClick={handleShow}>
                      
                      <Image src="src\img\Editar.png" rounded fluid />
                    </Button>
                    <Button variant="" id="edit" onClick={() => handleDelete(field.id)}>
                      <Image src="src\img\Delete.png" rounded fluid />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <ModalCancha
                        show={show}
                        handleClose={handleClose}
                        id={field.id}
                      />
                      </>
                      ))};
    </>
  );
};

export default CardField;
