import "./categories.scss";
import React from "react";
import { useCategory } from "../../categoryContext";

export default function Categories({
  onSelectCategory,
  burgerMenuActive,
  handleBurgerMenuClick,
}) {
  const { setSelectedCategory } = useCategory();
  const categories = [
    "Action",
    "Aventure",
    "Animation",
    "Comédie",
    "Crime",
    "Documentaire",
    "Drame",
    "Family",
    "Fantastique",
    "Histoire",
    "Horreur",
    "Musique",
    "Mystère",
    "Romance",
    "Thriller",
    "Guerre",
    "Western",
    "Kids",
    "News",
    "Reality",
    "Science-Fiction",
    "Soap",
    "Talk",
    "Politics",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="catetgories-container">
      {categories.map((category, index) => (
        <p
          key={index}
          className="category"
          onClick={() => {
            handleCategoryClick(category);
            if (handleBurgerMenuClick) {
              handleBurgerMenuClick(burgerMenuActive);
            }
          }}
        >
          {category}
        </p>
      ))}
    </div>
  );
}
