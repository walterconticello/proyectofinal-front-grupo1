import { useContext ,useState } from "react";
import { Button, Card , Modal } from "react-bootstrap";
import { UsersContext } from "../../context/UserContext"

const CardUsers = () => {

  const { users , deleteUsers ,viewProfileId} = useContext(UsersContext);
  const [show, setShow] = useState(false);

const handleDelete = (id) =>{
  console.log(id);
  deleteUsers(id);
}


  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

const viewPerfil = (id) =>{
  viewProfileId(id)
  setShow(true)
}

  return (
    <>
      <div className="m-1 d-flex flex-row"  >
      {users === undefined
          ? "No hay usuarios"
          : users.map((user,index) => (
          <div key={index}>
          <Card className="m-1 ms-4" style={{ width: "16rem" }}>
            <Card.Img variant="top" src={user.img} style={{ width: "16rem" , height: "10rem" }} />
            <Card.Body>
              <Card.Title>{user.nombre +' '+ user.apellido}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Button variant="primary" onClick={() => viewPerfil(user.id)} className="m-1">Ver Perfil</Button>
               <Button variant="primary" onClick={() => handleDelete(user.id)}>Eliminar perfil</Button>
            </Card.Body>
          </Card>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          </div>
        ))}
        </div>
    </>
  );
};

export default CardUsers