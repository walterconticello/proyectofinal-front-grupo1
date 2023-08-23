import { useState } from "react";
import { Modal, Button} from "react-bootstrap";
import FormEditField from "../Forms/FormEditField";
import "./Modal.css";

const ModalCancha = ({show , handleClose}) => {



  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancha</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit"  onClick={handleClose} >Save Changes</Button>
          <Button variant="danger" onClick={handleClose}>
            Eliminar Cancha
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCancha;