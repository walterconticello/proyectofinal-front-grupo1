import {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalCenter from '../Modals/ModalCenter';
import { SportCenterContext } from '../../context/CenterContext';

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
      {show && <ModalCenter show={show} handleClose={handleClose} editComplex={editComplex} />}
    </>
  );
  
}

export default CardCenter;

