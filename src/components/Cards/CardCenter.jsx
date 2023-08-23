import {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalEditComplex from '../Modals/ModalEditComplex';
import { SportCenterContext } from '../../context/CenterContext';
import "./Card.css";


const CardCenter = () => {

  const {complexs} = useContext(SportCenterContext);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [editComplex , setEditComplex] = useState(null);

  const handleEdit = (complex) =>{
    setEditComplex(complex)
    setShow(true);
  }

  return (
    <>
    <div  className="d-flex flex-wrap justify-content-between gap-3 m-3 container-fluid">
      {complexs === undefined
        ? "No Hay Complejos"
        : complexs.map((complex) => (
            <Card style={{ width: '16rem' }} key={complex.id}>
              <Card.Img variant="top" src="src\img\Ejemplos\1.jpg" />
              <Card.Body>
                <Card.Title>{complex.name}</Card.Title>
                <Card.Text>
                  SportCenter.Description
                </Card.Text>
                <Button variant="primary" className="ms-1">
                  Ver Complejo
                </Button>
                <Button
                  variant="warning"
                  className="ms-1"
                  onClick={() => handleEdit(complex)}
                >
                  Editar
                </Button>
              </Card.Body>
            </Card>
          ))}
      {show && <ModalEditComplex show={show}  handleClose={handleClose} editComplex={editComplex} />};
      </div>
    </>
    
  );
  
}

export default CardCenter;

