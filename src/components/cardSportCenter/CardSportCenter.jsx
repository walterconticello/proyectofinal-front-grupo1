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
        </div>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
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