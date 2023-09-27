import { Button, Card } from "react-bootstrap";
import { useState , useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import {UserContext} from "../../context/UserContex.jsx"
import Swal from 'sweetalert2';
import "./Card.css";


const CardUsers = () => {
  const [user, setUser] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const {users ,userDelete , updateUser , loading } = useContext(UserContext)

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

  // <Form.Check
  //         type="switch"
  //         id="custom-switch"
  //         label={`Estado: ${user.status ? "Suspendido" : "Activo"}`} // Mostrar el estado actual
  //           checked={status} // Establecer el estado del switch
  //           onChange={() => handleSwitchChange(user.status)} // Manejar cambios en el switch
  //       />

return (
 
);
};

export default CardUsers