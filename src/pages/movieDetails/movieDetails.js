import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./movieDetails.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";

export default function MovieDetails({ pageType }) {
  const { id } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [series, setSeries] = useState(null);
  const [backArrow, setBackArrow] = useState(false);
  const urlMovie = `https://easy-puce-coati-tam.cyclic.cloud/movies/${id}`;
  const urlSeries = `https://easy-puce-coati-tam.cyclic.cloud/series/${id}`;
  const currentPageFromState = location.state?.currentPage || 1;
  console.log(
    "this is the current page in movieDetails: ",
    currentPageFromState
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (pageType === "movies") {
          const { data } = await axios.get(urlMovie);
          setMovie(data);
        } else if (pageType === "series") {
          const { data } = await axios.get(urlSeries);
          setSeries(data);
        } else if (pageType === "home") {
          const moviesResponse = await axios.get(urlMovie);
          const seriesResponse = await axios.get(urlSeries);
          setMovie(moviesResponse.data);
          setSeries(seriesResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [urlMovie, urlSeries, pageType]);

  const handleBackArrow = () => {
    setBackArrow(!backArrow);
  };

  const pageTypeUrl =
    pageType === "movies" ? "/movies" : pageType === "series" ? "/series" : "/";

  return (
    <main className="movie-details-page">
      <section className="movie-details-container">
        <Link
          to={pageTypeUrl} // Use dynamic URL based on isMovie state
          state={{ currentPage: currentPageFromState }}
        >
          <div className="back-arrows-container">
            <img
              src="/assets/icons/back_arrow.png"
              alt="Back arrow icon"
              className={"back-arrow" + (backArrow ? " active" : "")}
              onMouseEnter={() => handleBackArrow()}
            />
            <img
              src="/assets/icons/back_arrow_2.png"
              alt="Back arrow icon"
              className={"back-arrow-2" + (!backArrow ? " active" : "")}
              onMouseLeave={() => handleBackArrow()}
            />
          </div>
        </Link>
        <ScrollToTopBtn />
        {movie && (
          <>
            <h1 className="title">{movie.title}</h1>
            <div className="movie-infos">
              <img
                className="movie-poster"
                src={movie.imagePath}
                alt="Movie poster"
              />
              <div className="movie-details">
                <p className="details">
                  <span className="detail-title">Description:</span>
                  {movie.description}
                </p>
                <p className="details">
                  <span className="detail-title">Durée:</span>
                  {movie.duration + "min"}
                </p>
                <p className="details">
                  <span className="detail-title">Score:</span>
                  {movie.score}
                </p>
                <p className="details">
                  <span className="detail-title">Popularité:</span>
                  {movie.popularity}
                </p>
                <p className="details">
                  <span className="detail-title">Genre:</span>
                  {movie.genre}
                </p>
                <p className="details">
                  <span className="detail-title">Date de sortie:</span>
                  {movie.releaseDate.slice(0, 10)}
                </p>
                {movie.trailer.length > 0 && (
                  <Link
                    to={movie.trailer[0].url}
                    className="trailer-youtube-link"
                  >
                    <button className="watch-trailer">Bande annonce</button>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}

        {series && (
          <>
            <h1 className="title">{series.title}</h1>
            <div className="movie-infos">
              <img
                className="movie-poster"
                src={series.imagePath}
                alt="Movie poster"
              />
              <div className="movie-details">
                {series.description && (
                  <p className="details">
                    <span className="detail-title">Description:</span>
                    {series.description}
                  </p>
                )}
                {series.seasons !== undefined && (
                  <p className="details">
                    <span className="detail-title">Saisons:</span>
                    {"S" + series.seasons}
                  </p>
                )}
                <p className="details">
                  <span className="detail-title">Score:</span>
                  {series.score}
                </p>
                <p className="details">
                  <span className="detail-title">Popularité:</span>
                  {series.popularity}
                </p>
                <p className="details">
                  <span className="detail-title">Genre:</span>
                  {series.genre}
                </p>
                <p className="details">
                  <span className="detail-title">Date de sortie:</span>
                  {series.releaseDate.slice(0, 10)}
                </p>
                {series.trailer.length > 0 && (
                  <Link
                    to={series.trailer[0].url}
                    className="trailer-youtube-link"
                  >
                    <button className="watch-trailer">Bande annonce</button>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
