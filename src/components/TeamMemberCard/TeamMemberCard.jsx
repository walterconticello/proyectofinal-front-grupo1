import React from 'react';
import Card from 'react-bootstrap/Card';
import member1 from '../../images/member1.jpg';
import member2 from '../../images/member2.jpg';
import member3 from '../../images/member3.jpg';
import member4 from '../../images/member4.jpg';
import member5 from '../../images/member5.jpg';

const TeamMemberCard = ({ name, position, description, imageSrc, imageAlt }) => {
  let image;
  switch (imageSrc) {
    case 'member1':
      image = member1;
      break;
    case 'member2':
      image = member2;
      break;
    case 'member3':
      image = member3;
      break;
    case 'member4':
      image = member4;
      break;
    case 'member5':
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