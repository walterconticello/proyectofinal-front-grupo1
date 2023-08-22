import React from 'react';
import Card from 'react-bootstrap/Card';
import member1 from './TeamImg/ToritoSrur.jpg';
import member2 from './TeamImg/WalterWhite.jpg';
import member3 from './TeamImg/DiegoMaradonaCow.jpg';
import member4 from './TeamImg/PaulWalker.jpg';
import member5 from './TeamImg/Marquinhos.jpg';

const TeamMemberCard = ({ name, position, description, imageSrc, imageAlt }) => {
  let image;
  switch (imageSrc) {
    case '/TeamImg/ToritoSrur.jpg':
      image = member1;
      break;
    case '/TeamImg/WalterWhite.jpg':
      image = member2;
      break;
    case '/TeamImg/DiegoMaradonaCow.jpg':
      image = member3;
      break;
    case '/TeamImg/PaulWalker.jpg':
      image = member4;
      break;
    case '/TeamImg/Marquinhos.jpg':
      image = member5;
      break;
    default:
      image = null;
  }

  return (
    <Card>
      <Card.Img variant="top" src={image} alt={imageAlt} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{position}</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TeamMemberCard;
// Path: src\components\TeamMemberCard.jsx\TeamMemberCard.jsx