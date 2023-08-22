import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const teamMembers = [
    {
        name: 'Lautaro Srur',
        description: 'Descripción breve del miembro del equipo y su rol en el proyecto.',
        github: 'https://github.com/LautaroCruzSrur',
        linkedin: 'https://www.linkedin.com/in/lautarocruzs/',
        image: './public/Lautaro.jpg'
    },
    {
        name: 'Walter Conticello',
        description: 'Descripción breve del miembro del equipo y su rol en el proyecto.',
        github: 'https://github.com/walterconticello', 
        linkedin: 'https://www.linkedin.com/in/walter-conticello/',
        image: './public/Walter.jpg'

    },
    {
        name: 'Marcos Quinteros',
        description: 'Descripción breve del miembro del equipo y su rol en el proyecto.',
        github: 'https://github.com/marcosquinteros ',
        linkedin: 'https://www.linkedin.com/in/marcos-quinteros-135b87237/' ,
        image: './public/Marcos.jpg'
    },
    {
        name: 'Diego Vaca Paz',
        description: 'Descripción breve del miembro del equipo y su rol en el proyecto.',
        github: 'https://github.com/diegovacapaz' ,
        linkedin: 'https://www.linkedin.com/in/diego-isaias-vaca-paz-a9b6361b8/',
        image: './public/Diego.jpg'
    },
    {
        name: 'Pablo Matias Rodriguez',
        description: 'Descripción breve del miembro del equipo y su rol en el proyecto.',
        github: 'https://github.com/PabloRodriguez95',
        linkedin: 'https://www.linkedin.com/in/pablo-rodriguez-372845285/',
        image: './public/Pablo.jpg'

    }
];


const CardsTeam = () => {
    return (
      <div className="d-flex flex-wrap justify-content-center">
        {teamMembers.map((member, index) => (
          <Card key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card.Img variant="top" src={member.image} />
            <Card.Body>
              <Card.Title>{member.name}</Card.Title>
              <Card.Text>{member.description}</Card.Text>
              <Button variant="primary" href={member.github}>
                <FontAwesomeIcon icon={faGithub} />
              </Button>
              <Button variant="primary" href={member.linkedin}>
                <FontAwesomeIcon icon={faLinkedin} /> 
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };
  

export default CardsTeam;