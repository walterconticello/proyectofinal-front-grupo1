import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Reservation from "./Reservation";
import NoPhoto from "../../assets/no-photo.jpg";

const Field = ({field, loggedUser}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 



    return (
        <>
            <Card style={{ width: '26rem'}} className="m-3 card">
                <Card.Img variant="top" src={field.photo.url || NoPhoto} className="card-photo"/>
                <Card.Header>{field.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Fútbol {field.size}</Card.Title>
                    <Card.Text className="d-flex flex-column">
                        <span>Apertura: {field.openHour}hs</span>
                        <span>Cierre: {field.closeHour}hs</span>
                        <span className="my-2">Precio: ${field.pricePerHour}</span>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="outline-success" className="btn-card" disabled={!loggedUser} onClick={handleShow}>Reservar</Button>
                </Card.Footer>
            </Card>
            {
                (loggedUser && show) && <Reservation field={field} show={show} loggedUser={loggedUser} onHide={handleClose}></Reservation>
            }
        </>
    );
}

export default Field;