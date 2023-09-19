import React from "react";
import Carousel from "react-bootstrap/Carousel";

import sliderImage1 from "./slider-images/storeslider1.png";
import sliderImage2 from "./slider-images/storeslider2.png";
import sliderImage3 from "./slider-images/storeslider3.png";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage3} alt="First slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
