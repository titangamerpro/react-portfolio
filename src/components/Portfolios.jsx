import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { portfolioData } from "../utils/data";
import { SlickNextArrow, SlickPrevArrow } from "./CustomArrows";



const Portfolios = () => {
  const [activeButton, setActiveButton] = useState('next');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow activeButton={activeButton}/>,
    prevArrow: <SlickPrevArrow activeButton={activeButton} />,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <secthion className="portfolio">
      <div className="container">
        <span className="iner-subtitle services-subtitle">MY WORKS</span>
        <p className="iner-title services-title"> Featured Portfolios</p>
        <Slider {...settings} className="slaiders">
          {portfolioData &&
            portfolioData.map((slide) => (
              <div className="slaider-block" key={slide.id}>
                <div className="slaider-wrapper">
                  <figure className="slaider-img">
                    <img src={slide.imageSrc} alt={slide.title} />
                  </figure>
                  <div className="slaider-content">
                    <span className="slaider-title">{slide.title}</span>
                    <a href="" className="slaider-link">
                      {slide.category}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </secthion>
  );
};

export default Portfolios;
