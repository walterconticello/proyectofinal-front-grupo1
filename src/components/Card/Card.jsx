import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Ver más</a>
    </div>
  );
}


export default Card;