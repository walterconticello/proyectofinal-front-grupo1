import './CardSportCenter.css';
import { Card, Button } from 'react-bootstrap';

const CardSportCenter = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} className="h-80 card-custom">
          <div className="card-image-container">
          </div>
          <Card.Body>
            <Card.Title className='card-title'>{card.name}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
            <div className="card-buttons d-flex justify-content-between">
              <Button className="button-alquilar">
                Alquilar
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default CardSportCenter;
