import React, { useEffect, useState } from "react";
import "./slider.scss";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "first-slide",
      content: <img src="/assets/images/jujutsu.jpg" alt="Jujutsu kaisen " />,
    },
    {
      id: "second-slide",
      content: (
        <img src="/assets/images/attackontitan.jpg" alt="Attack on titan " />
      ),
    },
    {
      id: "third-slide",
      content: <img src="/assets/images/chainsawman.jpg" alt="Chainsaw man " />,
    },
    {
      id: "fourth-slide",
      content: <img src="/assets/images/demonslayer.jpg" alt="demon slayer " />,
    },
    {
      id: "fifth-slide",
      content: <img src="/assets/images/mobpsyco.jpg" alt="Mob psyco" />,
    },
    {
      id: "fifth-slide",
      content: <img src="/assets/images/onepunchman.jpg" alt="One punch man" />,
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
