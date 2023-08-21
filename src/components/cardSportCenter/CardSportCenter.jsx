import './CardSportCenter.css';
import { Link } from 'react-router-dom';
import { cardContext } from '../../context/cardContext';
import { useContext, useState , useEffect } from 'react';
import {Card, Button } from 'react-bootstrap';

const CardSportCenter = () => {
    const {Cards} = useContext(cardContext);
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const Card = ({ card }) => {
      return (
        <Card className="h-100">
          <div className="card-image-container">
            <Card.Img src={card.image.url} alt={card.name} className="card-image img-fluid" />
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
      );
    };
  };

export default CardSportCenter;