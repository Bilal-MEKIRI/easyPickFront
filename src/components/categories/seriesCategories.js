import "./categories.scss";
import React from "react";
import { useSeriesCategory } from "../../categoryContext";

export default function SeriesCategories({ handleCategoryBtnClick }) {
  const { setSelectedCategory } = useSeriesCategory();
  const categories = [
    "Action",
    "Animation",
    "Comédie",
    "Crime",
    "Documentaire",
    "Drame",
    "Fantastique",
    "Familial",
    "Mystère",
    "Romance",
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
