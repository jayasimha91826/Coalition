import Carousel from "react-bootstrap/Carousel";
import React from "react";
import './carousel.css'

const carousel = () => {
  return (
    <div>
      <Carousel className="mycarousel">
        <Carousel.Item>
          <img 
            className="d-block carouselimage"
            src="/carousel-image1.png"
            alt="carousel1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carouselimage"
            src="/carousel-image2.png"
            alt="carousel2"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default carousel;
