import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardCenter from "../components/Cards/CardCenter"
import ModalNewSportCenter from '../components/Modals/ModalNewSportCenter';

const SportCenter = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const OpenModal = () =>{
    setShow(true);
  }

  return (
    <div className='ContainerCard container-fluid'>
      <Button variant="primary" onClick={OpenModal}>
  Nuevo complejo
</Button>
      <CardCenter />
      <ModalNewSportCenter show={show} handleClose={handleClose} />
    </div>
  );
};

export default SportCenter;
