import { Button, Modal } from "react-bootstrap";

const Reservation = ({show, onHide, field}) => {
    return (
        <>
            <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reserva la {field.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-muted">Podes alquilar tu cancha entre 1 o 60 dias antes **</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" className="btn-reservation" onClick={onHide}>Cerrar</Button>
                    <Button variant="outline-success" className="btn-reservation">Reservar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Reservation;