import React from "react";
import Slider from "react-slick";
import "./slider1.scss";

export default function Slide() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    row: 1,
    column: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div id="slider-container">
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings}>
          <div className="slider-element">
            <img src="/assets/images/Bird-Box-trailer.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="/assets/images/demon-slayer-trailer.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="/assets/images/John-Wick-trailer.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img src="/assets/images/nike-air-movie-trailer.jpg" alt=""></img>
          </div>
          <div className="slider-element">
            <img
              src="/assets/images/spider-man-no-way-home-trailer.jpg"
              alt=""
            ></img>
          </div>
          <div className="slider-element">
            <img src="/assets/images/the-last-of-us-trailer.jpg" alt=""></img>
          </div>
        </Slider>
      </div>
    </>
  );
}
