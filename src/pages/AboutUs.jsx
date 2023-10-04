import CardsTeam from "../components/CardsTeam/CardsTeam";
import "./AboutUs.css";
import { Row, Col } from "react-bootstrap";
const AboutUs = () => {
  return (
    <div className="container">
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <h1 className="title bigger">Nuestra misión</h1>

          <div className="content background"></div>

          <p className="text">
            "Nuestro objetivo es impulsar la innovación digital a través del
            desarrollo web de aplicaciones excepcionales, superando las
            expectativas de nuestros clientes. Trabajamos incansablemente para
            transformar ideas en realidades digitales, utilizando tecnologías de
            vanguardia y las mejores prácticas de desarrollo. Nuestra misión es
            construir experiencias duraderas en línea, colaborando creativamente
            y enfocándonos en la calidad, para hacer que la web sea más
            dinámica, interactiva y eficiente para todos."
          </p>

          <h2 className="title bigger">¿Quienes somos?</h2>
          <CardsTeam />
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
