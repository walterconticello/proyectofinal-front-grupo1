import { Button } from 'react-bootstrap';
import { useState } from 'react';
import FieldsTable from '../../components/FieldsTable/FieldsTable';
import ModalNewField from '../../components/Modals/ModalNewField';

const Fields= () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='ContainerCard container-fluid'>
     <Button variant="primary" onClick={() => handleShow(show)}>
        Nuevo field
      </Button>
        <FieldsTable/>
        </div>
        <ModalNewField show={show}
              handleClose={handleClose} />
        </>
  )
}
export default Fields;