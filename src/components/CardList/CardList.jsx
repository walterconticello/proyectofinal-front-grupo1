import React from 'react';
import Card from './Card';

function CardList(props) {
  return (
    <div className="card-list">
      {props.cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default CardList;