import { Button, Modal } from "react-bootstrap";

const Reservation = ({show, onHide}) => {
    return (
        <>
            <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reserva tu cancha
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
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