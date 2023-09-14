import { Link } from "react-router-dom";
import "./responsiveMenu.scss";
import React from "react";

export default function ResponsiveMenu({
  burgerMenuActive,
  handleBurgerMenuClick,
}) {
  return (
    <div className={`responsive-menu ${burgerMenuActive ? "active" : ""}`}>
      <ul className="menu-items">
        <li className="item">
          <Link
            to="/"
            className="link"
            onClick={() => {
              if (handleBurgerMenuClick) {
                handleBurgerMenuClick(burgerMenuActive);
              }
            }}
          >
            Accueil
          </Link>
        </li>
        <li className="item">
          <Link
            to="series"
            className="link"
            onClick={() => {
              if (handleBurgerMenuClick) {
                handleBurgerMenuClick(burgerMenuActive);
              }
            }}
          >
            Séries
          </Link>
        </li>
        <li className="item">
          <Link
            to="movies"
            className="link"
            onClick={() => {
              if (handleBurgerMenuClick) {
                handleBurgerMenuClick(burgerMenuActive);
              }
            }}
          >
            Films
          </Link>
        </li>
      </ul>
    </div>
  );
}
