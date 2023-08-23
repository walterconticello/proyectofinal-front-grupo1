import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardCenter from "../components/Cards/CardCenter"
import ModalNewComplex from '../components/Modals/ModalNewComplex';

const SportCenter = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);

  return (
    <div className='ContainerCard container-fluid'>
      <Button variant="primary" onClick={handleOpen}>
        Nuevo complejo
      </Button>
      <CardCenter />
      <ModalNewComplex show={show} setShow={setShow} />
    </div>
  );
};

export default SportCenter;
