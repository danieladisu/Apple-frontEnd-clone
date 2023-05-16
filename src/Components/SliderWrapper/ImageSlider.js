/** @format */
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./ImageSlider.css";
import Slider from "react-slick";
import React, { useState } from "react";
import img1 from "../images/large/1250x703.jpg";
import img2 from "../images/large/1250x703(1).jpg";
import img3 from "../images/large/1250x703(2).jpg";
import img4 from "../images/large/1250x703(3).jpg";
import img5 from "../images/large/1250x703(4).jpg";
import img6 from "../images/large/1250x703(5).jpg";
import img7 from "../images/large/1250x703(6).jpg";
import img8 from "../images/large/1250x703(7).jpg";

import "./ImageSlider.css";

function ImageSlider(props) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  console.log(images);

  const sliderSettings = {
    // centerMode: true,
    // centerPadding: 0,
    // objectFit: "contain",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    nextArrow: <button className="slider-next  ">Next</button>,
    prevArrow: <button className="slider-prev">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home__container container-fluid col-12">
      <Slider {...sliderSettings} className="slider" variant="dark">
        {images.map((image, index) => (
          <img
            className="home__image"
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
