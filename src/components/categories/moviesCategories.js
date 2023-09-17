import "./categories.scss";
import React from "react";
import { useMovieCategory } from "../../categoryContext";

export default function MoviesCategories({ handleCategoryBtnClick }) {
  const { setSelectedCategory } = useMovieCategory();
  const categories = [
    "Action",
    "Aventure",
    "Animation",
    "Comédie",
    "Crime",
    "Documentaire",
    "Drame",
    "Fantastique",
    "Histoire",
    "Horreur",
    "Musique",
    "Familial",
    "Mystère",
    "Romance",
    "Thriller",
    "Guerre",
    "Science-Fiction",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    handleCategoryBtnClick();
  };

  return (
    <div className="catetgories-container">
      {categories.map((category, index) => (
        <p
          key={index}
          className="category"
          onClick={() => {
            handleCategoryClick(category);
          }}
        >
          {category}
        </p>
      ))}
    </div>
  );
}
