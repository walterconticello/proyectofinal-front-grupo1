import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ReactCardFlip from "react-card-flip";
import "./CardsTeam.css";

const teamMembers = [
  {
    name: "Lautaro Srur",
    description:
      "Desarrollador web apasionado, combina creatividad y código para crear sitios excepcionales.",
    github: "https://github.com/LautaroCruzSrur",
    linkedin: "https://www.linkedin.com/in/lautarocruzs/",
    image: "https://avatars.githubusercontent.com/u/105937766?v=4",
  },
  {
    name: "Walter Conticello",
    description:
      "Experto en desarrollo web, construye estructuras sólidas tanto en back-end como en front-end.",
    github: "https://github.com/walterconticello",
    linkedin: "https://www.linkedin.com/in/walter-conticello/",
    image: "https://avatars.githubusercontent.com/u/126125113?v=4",
  },
  {
    name: "Marcos Quinteros",
    description:
      "Scrum Master y programador web creativo, une la estética con la funcionalidad de manera magistral.",
    github: "https://github.com/marcosquinteros ",
    linkedin: "https://www.linkedin.com/in/marcos-quinteros-135b87237/",
    image: "https://avatars.githubusercontent.com/u/111574002?v=4",
  },
  {
    name: "Diego Vaca Paz",
    description:
      "Un talentoso arquitecto web full stack que domina tanto el frente como el dorso digital.",
    github: "https://github.com/diegovacapaz",
    linkedin: "https://www.linkedin.com/in/diego-isaias-vaca-paz-a9b6361b8/",
    image: "https://avatars.githubusercontent.com/u/69909513?v=4",
  },
  {
    name: "Pablo Matias Rodriguez",
    description:
      "Desarrollador full stack apasionado, crea soluciones completas con maestría.",
    github: "https://github.com/PabloRodriguez95",
    linkedin: "https://www.linkedin.com/in/pablo-rodriguez-372845285/",
    image: "https://avatars.githubusercontent.com/u/127259019?v=4",
  },
];

const CardTeam = ({ member }) => {
  return (
    <Card className="col-sm-6 col-md-4 col-lg-4 mb-4 custom-card mx-2">
      <Card.Img variant="top" src={member.image} />
      <Card.Body>
        <Card.Title>{member.name}</Card.Title>
        <div className="buttons-container">
          <Button
            className="github-button"
            variant="primary"
            href={member.github}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button
            className="linkedin-button"
            variant="primary"
            href={member.linkedin}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const CardsTeam = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {teamMembers.map((member, index) => (
        <CardTeam key={index} member={member} />
      ))}
    </div>
  );
};

export default CardsTeam;
