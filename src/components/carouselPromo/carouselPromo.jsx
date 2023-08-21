import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import sliderImage1 from './imgCarouselPromo/slider1.jpg';
import sliderImage2 from './imgCarouselPromo/slider2.jpg';
import sliderImage3 from './imgCarouselPromo/slider3.jpg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <a href="https://www.pepsi.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100 carousel-image" src={sliderImage1} alt="First slide" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://www.ypf.com/Paginas/home.aspx" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100 carousel-image" src={sliderImage2} alt="First slide" />
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a href="https://lays.com/" target="_blank" rel="noopener noreferrer">
          <img className="d-block w-100 carousel-image" src={sliderImage3} alt="First slide" />
        </a>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;