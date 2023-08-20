import Carousel from 'react-bootstrap/Carousel';
import './carouselPromo.css';

import sliderImage1 from './imgCarouselPromo/slider1.jpeg';
import sliderImage2 from './imgCarouselPromo/slider2.jpeg';
import sliderImage3 from './imgCarouselPromo/slider3.jpeg';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={sliderImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={sliderImage2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src={sliderImage3} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;