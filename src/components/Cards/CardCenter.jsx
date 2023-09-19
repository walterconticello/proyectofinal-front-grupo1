import  React , {useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";
import ModalEditSportCenter from '../Modals/ModalEditSportCenter';
import { SportCenterContext } from '../../context/CenterContext';
import Swal from 'sweetalert2';
import "./Card.css";


const CardCenter = () => {

  const {complexs, deleteSportCenter} = useContext(SportCenterContext);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [editComplex , setEditComplex] = useState(null);

  const handleEdit = (complex) =>{
    setEditComplex(complex)
    setShow(true);
  }
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
       deleteSportCenter(_id);
        Swal.fire(
          'Eliminado',
          'El elemento ha sido eliminado correctamente',
          'success'
        );
      }
    });
  };

  return (
    <>
    <div  className="d-flex flex-wrap justify-content-between gap-3 m-3 container-fluid">
      {complexs === undefined
        ? "No Hay Complejos"
        : complexs.map((complex) => (
          <React.Fragment key={complex._id}>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="src\img\Ejemplos\1.jpg" />
              <Card.Body>
                <Card.Title>{complex.name}</Card.Title>
                <Card.Text>
                  SportCenter.Description
                </Card.Text>
                <div className="d-flex justify-content-between">
                <Button variant="primary" className="ms-1">
                  Ver Complejo
                </Button>
                    <Button variant="" id="edit" onClick={() => handleEdit(complex)}>
                      <Image src="src/assets/Editar.png" rounded fluid />
                    </Button>
                    <Button variant="" id="edit" onClick={() => handleDelete(complex._id)}>
                      <Image src="src\assets\Delete.png" rounded fluid />
                    </Button>
                    </div>
              </Card.Body>
            </Card>
            </React.Fragment>
          ))}
      {show && <ModalEditSportCenter show={show}  handleClose={handleClose} editComplex={editComplex} />};
      </div>
    </>
    
  );
  
}

export default CardCenter;

