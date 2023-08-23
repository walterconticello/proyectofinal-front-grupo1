import './CardSportCenter.css';
import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import {cardContext} from '../../context/cardContext';

const CardSportCenter = () => {
  const { cards }= useContext(cardContext);

    return (
      <>
      { cards === undefined ? <h1>Cargando...</h1> : cards.map((card) =>(
      <Card key={card.id} className="h-80 card-custom">
        <div className="card-image-container">
        <Card.Img src={card.image?.url} alt={card.name} className="card-image img-fluid" />
        </div>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <div className="card-buttons d-flex justify-content-between">
            <Button variant="primary" className="buy-button btn">
              Alquilar
            </Button>
            <Button variant="secondary" className="details-button btn">
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>
      ))}
    </>
    );
  };



export default CardSportCenter;