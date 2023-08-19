import React from "react";
import { useState, useEffect } from "react";
import "./scrollToTopBtn.scss";

export default function ScrollToTopBtn() {
  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY); // Debugging
      if (window.scrollY >= 400) {
        console.log("Setting btnVisible to true:", btnVisible); // Debugging
        setBtnVisible(true);
      } else {
        console.log("Setting btnVisible to false:", btnVisible); // Debugging
        setBtnVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [btnVisible]);

  const handleBtnClick = () => {
    setBtnVisible(false); // Hide the button immediately
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <img
      src="/assets/icons/arrow_top.png"
      alt="icon arrow top"
      className={`scroll-to-top-button ${btnVisible ? "visible" : ""}`}
      onClick={() => {
        handleBtnClick();
      }}
    ></img>
  );
}
