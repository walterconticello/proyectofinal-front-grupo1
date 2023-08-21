import { Button, Form, Modal } from "react-bootstrap";

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
                <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Form.Group className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <Button variant="outline-danger" className="btn-reservation" type="button" onClick={onHide}>Cerrar</Button>
                            <Button variant="outline-success" className="btn-reservation" type="submit">Reservar</Button>
                        </Form.Group>
                    </Form>
                    <p className="text-muted my-2">Podes alquilar tu cancha entre 1 o 60 dias antes **</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Reservation;