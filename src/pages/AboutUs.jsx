import CardsTeam from '../components/CardsTeam/CardsTeam';
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div>
      <h1 className='title bigger'>Nuestra misión</h1>
     
      <div className='content background'>
        <p className='text'>"Nuestro Objetivo es impulsar la innovación digital a través del desarrollo web de aplicaciones excepcionales. 
          Como equipo apasionado, nos comprometemos a crear soluciones en línea que no solo sean funcionales y atractivas,
           sino que también superen las expectativas de nuestros clientes. 
           Trabajamos incansablemente para transformar ideas en realidades digitales, implementando tecnologías de vanguardia
            y las mejores prácticas de desarrollo. Nuestra misión es no solo construir aplicaciones, 
            sino también construir experiencias que dejen una marca duradera en el mundo en línea. 
            Mediante la colaboración, la creatividad y el enfoque en la calidad, estamos dedicados a hacer que la web sea un lugar más dinámico,
             interactivo y eficiente para todos."</p>
      </div>
          
      <h2 className='title bigger'>¿Quienes somos?</h2>
      <h2 className='h2'>Conocenos más haciendo click en nosotros!</h2>
      <br />
      <CardsTeam />
    </div>
  );
}

export default AboutUs;