import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Reservation from "./Reservation";
import NoPhoto from "../../assets/no-photo.jpg";

const Field = ({field}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 



    return (
        <>
            <Card style={{ width: '26rem'}} className="m-3 card">
                <Card.Img variant="top" src={field.photo || NoPhoto} className="card-photo"/>
                <Card.Header>{field.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Fútbol {field.type}</Card.Title>
                    <Card.Text className="d-flex flex-column">
                        <span>Apertura: {field.openHour}hs</span>
                        <span>Cierre: {field.closeHour}hs</span>
                        <span className="my-2">Precio: ${field.pricePerHour}</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-success" className="btn-card" onClick={handleShow}>Reservar</Button>
                </Card.Footer>
            </Card>
            <Reservation field={field} show={show} onHide={handleClose}></Reservation>
        </>
    );
}

export default Field;