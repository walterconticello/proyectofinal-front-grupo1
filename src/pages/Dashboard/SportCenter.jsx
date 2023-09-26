import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CardCenter from "../../components/Cards/CardCenter"
import SportCenterForm from '../../components/SportCenterTable/SportCenterForm';
import SportCenterTable from '../../components/SportCenterTable/SportCenterTable';

const SportCenter = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const OpenModal = () =>{
    setShow(true);
  }

  return (
    <div className='ContainerCard container-fluid'>
     <SportCenterTable/>
    </div>
  );
};

export default SportCenter;
