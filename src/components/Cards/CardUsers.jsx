import { Button, Card } from "react-bootstrap";
import { useState , useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import {UsersContext} from "../../context/UserContex.jsx"
import Swal from 'sweetalert2';
import "./Card.css";


const CardUsers = () => {
  const [user, setUser] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const {users ,userDelete , updateUser , loading } = useContext(UsersContext)

  const handleSwitchChange = (statusText) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, desactivarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        updateUser(!statusText);
        Swal.fire(
          'Desactivado',
          'El elemento ha sido desactivado correctamente',
          'success'
        );
      }
    });
    
  };

  useEffect(() => {
    if (!loading) {
      setDataLoaded(true);
    }
  }, [loading]);

  const statusText = user.status ? "Suspendido" : "Activo";
  // const { users , deleteUsers ,viewProfileId} = useContext(UsersContext);

  const handleDelete = (id) => {
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
        userDelete(id);
        Swal.fire(
          'Eliminado',
          'El elemento ha sido eliminado correctamente',
          'success'
        );
      }
    });
  };
  useEffect(() => {
    if (!loading) {
      setDataLoaded(true);
    }
  }, [loading]);

return (
  <div className="d-flex gap-3" >
    {users === undefined ? "No Existen Usuarios" : users.map((user) =>(
      <>
    <Card style={{ width: '18rem' }} key={user._id}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={`Estado: ${user.status ? "Suspendido" : "Activo"}`} // Mostrar el estado actual
            checked={status} // Establecer el estado del switch
            onChange={() => handleSwitchChange(user.status)} // Manejar cambios en el switch
        />
        <div className="d-flex justify-content-between">
        <Button variant="" id="edit" onClick={() => handleDelete(user._id)}><img src="src/assets/Delete.png"/></Button>
        <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Body>
    </Card>
    </>
    )) }; 
    
  </div>
);
};

export default CardUsers