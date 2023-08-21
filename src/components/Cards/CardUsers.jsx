// import { useContext ,useState } from "react";
import { Button, Card } from "react-bootstrap";
// import { UsersContext } from "../../context/UserContext"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const CardUsers = () => {
  const [status, setStatus] = useState(false);

  const handleSwitchChange = () => {
    setStatus(!status); 
  };
  const statusText = status ? "Suspendido" : "Activo"; 

  // const { users , deleteUsers ,viewProfileId} = useContext(UsersContext);

// const handleDelete = (id) =>{
//   console.log(id);
//   deleteUsers(id);
// }




// const viewPerfil = (id) =>{
//   viewProfileId(id)
//   setShow(true)
// }

return (
  <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={`Estado: ${statusText}`} // Mostrar el estado actual
            checked={status} // Establecer el estado del switch
            onChange={handleSwitchChange} // Manejar cambios en el switch
        />
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
);
};

export default CardUsers