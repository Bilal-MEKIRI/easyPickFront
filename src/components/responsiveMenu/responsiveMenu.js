import { Link } from "react-router-dom";
import "./responsiveMenu.scss";
import React from "react";
import { useState } from "react";
import Categories from "../categories/categories";

export default function ResponsiveMenu({
  burgerMenuActive,
  handleBurgerMenuClick,
}) {
  const [displayCategories, setDisplayCategories] = useState(false); // State for displaying Categories component

  // Function to toggle Categories component visibility
  const toggleCategories = () => {
    setDisplayCategories(!displayCategories);
  };
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
        <li
          id="categories"
          onClick={() => {
            toggleCategories();
          }} // Show Categories on hover
        >
          Catégories
          {displayCategories && (
            <Categories handleBurgerMenuClick={handleBurgerMenuClick} />
          )}
          {/* Show Categories component */}
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
