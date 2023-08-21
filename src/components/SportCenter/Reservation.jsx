import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation = ({show, onHide, field}) => {
    
    const [startDate, setStartDate] = useState(new Date());

    const user = {
        username: "diego_vacapaz",
        userId: "unadcfgaigbfgasd"
    }
    
    const addMonth = (month, offset) => {
        if(month + offset <= 11){
            return month + offset;
        }
        return (month + offset - 11);
    }
    const endDate = new Date(startDate.getFullYear(), addMonth(startDate.getMonth(), 2), startDate.getDate());
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
                        <h3 className="text-muted mb-3">Usuario: {user.username}</h3>
                        <div className="d-flex flex-column flex-md-row my-3">
                            <Form.Group className="reservation-input-size d-flex flex-column mb-4 mb-md-0">
                                <Form.Label className="fw-medium">Nombre: </Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu Nombre"/>
                            </Form.Group>
                            <Form.Group className="d-flex flex-column reservation-input-size mb-4 mb-md-0">
                                <Form.Label className="fw-medium">Seleccione una fecha: </Form.Label>
                                <DatePicker showIcon showTimeSelect minDate={new Date()} maxDate={endDate} excludeDates={[]} className="comment-border" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Form.Group>
                        </div>
                        <Form.Group className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <Button variant="outline-danger" className="btn-reservation" type="button" onClick={onHide}>Cerrar</Button>
                            <Button variant="outline-success" className="btn-reservation" type="submit" onClick={()=>{
                            }}>Reservar</Button>
                        </Form.Group>
                    </Form>
                    <p className="text-muted my-2">Podes alquilar tu cancha entre 1 o 60 dias antes **</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Reservation;