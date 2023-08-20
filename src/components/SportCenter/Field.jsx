import { Button, Card } from "react-bootstrap";

const Field = ({field}) => {
    return (
        <>
            <Card style={{ width: '26rem'}} className="m-3 card">
                <Card.Img variant="top" src={field.photo} className="card-photo"/>
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
                    <Button variant="outline-success" className="btn-card">Reservar</Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Field;