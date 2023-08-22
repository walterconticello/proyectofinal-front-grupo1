import React from 'react';
import CardsTeam from '../components/CardsTeam/CardsTeam';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutUs = () => {
  return (
    <div>
      <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '36px' }}>Quienes somos?</h1>
      <CardsTeam />
    </div>
  );
}

export default AboutUs;