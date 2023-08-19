import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardSportCenter() {
  return (
    <Card style={{ width: '200px', height: '300px', marginLeft: '20px', marginBottom: '20px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>cardSportCenter</Card.Title>
        <Button variant="danger">Alquilar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardSportCenter;