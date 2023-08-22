import CardsTeam from '../components/CardsTeam/CardsTeam';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AboutUs = () => {
  return (
    <div>
      <h1>Quienes somos?</h1>
      <CardsTeam />
    </div>
  );
}

export default AboutUs;