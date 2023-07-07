import React, { useEffect, useState } from "react";
import "./slider.scss";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "first-slide",
      content: (
        <img
          src="/assets/images/demon-slayer-trailer.jpg"
          alt="demon slayer "
        />
      ),
    },
    {
      id: "second-slide",
      content: (
        <img src="/assets/images/Bird-Box-trailer.jpg" alt="Bird box " />
      ),
    },
    {
      id: "third-slide",
      content: (
        <img src="/assets/images/John-Wick-trailer.jpg" alt="John-Wick" />
      ),
    },
    {
      id: "fourth-slide",
      content: (
        <img src="/assets/images/nike-air-movie-trailer.jpg" alt="Air movie" />
      ),
    },
    {
      id: "fifth-slide",
      content: (
        <img
          src="/assets/images/spider-man-no-way-home-trailer.jpg"
          alt="Air movie"
        />
      ),
    },
    {
      id: "fifth-slide",
      content: (
        <img src="/assets/images/the-last-of-us-trailer.jpg" alt="Air movie" />
      ),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <main className="slider">
      <section className="slides-container">
        {slides.map((slide, index) => {
          return (
            <div
              className="slide"
              id={slide.id}
              key={index}
              style={{
                transform: `translateX(${-currentSlide * 100}%)`,
              }}
            >
              {slide.content}
            </div>
          );
        })}
      </section>
    </main>
  );
}
