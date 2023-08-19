import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./contentCard.scss";

export default function Card({
  id,
  poster,
  title,
  duration,
  seasons,
  currentPage,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    let url;

    // Determine the URL based on the current page type
    if (location.pathname === "/") {
      url = `/${id}`;
    } else {
      const isMovie = location.pathname.startsWith("/movies");
      url = isMovie ? `/movies/${id}` : `/series/${id}`;
    }

    navigate(url, { state: { currentPage } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <img className="poster-image" src={poster} alt={title}></img>
      <div className="info">
        <p className="title">{title}</p>
        <p>-</p>
        {duration && <p className="duration">{duration}min</p>}
        {seasons && <p className="seasons">{"S" + seasons}</p>}
      </div>
    </div>
  );
}
