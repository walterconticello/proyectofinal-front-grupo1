import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalCancha from "../Modals/ModalCanchas";
import { Image } from "react-bootstrap";
import "./Card.css";
import { FieldContext } from "../../context/FieldContext";
import { useContext } from "react";

const CardField = () => {
  const { fields, getFields, viewFieldById, deleteField } =
    useContext(FieldContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedId(null);
    setShowModal(false);
  };

  return (
    <>
      {fields === undefined
        ? "No hay Canchas"
        : fields.map((field, index) => (
            <div key={index}>
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src="src\img\Ejemplos\2.jpg" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{field.name}</Card.Title>
                  <Card.Text>${field.pricePerHour}</Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" size="sm">
                      Ver Cancha
                    </Button>
                    <Button variant="" id="edit" onClick={() => openModal(field.id)}>
                      <ModalCancha
                        showModal={showModal}
                        closeModal={closeModal}
                        selectId={selectId}
                      />
                      <Image src="src\img\Editar.png" rounded fluid />
                    </Button>
                    <Button variant="" id="edit" onClick={() => deleteField(field.id)}>
                      <Image src="src\img\Delete.png" rounded fluid />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
    </>
  );
};

export default CardField;
