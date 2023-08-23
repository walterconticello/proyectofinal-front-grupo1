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
    <div  className="d-flex flex-wrap justify-content-between gap-3 m-3 container-fluid">
       {fields === undefined ? "No hay canchas" : fields.map((field) => (
        <>
              <Card style={{ width: '18rem' }} key={field.id}>
                <Card.Img variant="top" src="src\img\Ejemplos\2.jpg" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title >{field.name}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <Button className="buttonCardDashboar" size="sm">
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
            <ModalCancha
                        show={show}
                        handleClose={handleClose}
                        id={field.id}
                      />
                      </>
                      ))};
                      </div>
    </>
  );
};

export default CardField;
