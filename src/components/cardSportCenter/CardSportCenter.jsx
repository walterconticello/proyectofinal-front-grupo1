import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardSportCenter.css';

function CardSportCenter() {
  return (
    <Card className="card-sport-center">
      <Card.Body>
        <Card.Title>cardSportCenter</Card.Title>
        <Button>Alquilar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardSportCenter;