// import { useContext ,useState } from "react";
import { Button, Card } from "react-bootstrap";
// import { UsersContext } from "../../context/UserContext"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./Card.css";


const CardUsers = () => {
  const [status, setStatus] = useState(false);

  const handleSwitchChange = () => {
    setStatus(!status); 
  };
  const statusText = status ? "Suspendido" : "Activo"; 

  // const { users , deleteUsers ,viewProfileId} = useContext(UsersContext);

  const handleDelete = (_id) => {
    // Mostrar un cuadro de diálogo de SweetAlert para confirmar la eliminación
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteField(id);
        Swal.fire(
          'Eliminado',
          'El elemento ha sido eliminado correctamente',
          'success'
        );
      }
    });
  };


return (
  <div className="d-flex gap-3" >
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