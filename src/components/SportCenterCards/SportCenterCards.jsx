import { useContext, useState, useEffect } from "react";
import { SportCenterContext } from "../../context/CenterContext";
import { Card } from "react-bootstrap";

const SportCenterCards = () => {
  const { complexs } = useContext(SportCenterContext);
  console.log(complexs);
  return (
    <div className="sport-center-cards">
      {complexs.map((center, index) => (
        <Card key={index} className="card w-75 h-25">
          <img src={center.photo.url} className="img-fluid" />
          <Card.Title>{center.name}</Card.Title>
          <p>{center.address}</p>
        </Card>
      ))}
    </div>
  );
};

export default SportCenterCards;
