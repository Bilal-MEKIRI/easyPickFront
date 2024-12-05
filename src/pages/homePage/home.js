import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import "../../components/resetCSS/reset.scss";
import "./home.scss";
import Card from "../../components/contentCard/contentCard.js";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; //Milliseconds in one week
  // const urlMovies = "https://easy-puce-coati-tam.cyclic.cloud/movies";
  // const urlSeries = "https://easy-puce-coati-tam.cyclic.cloud/series";
  const urlMovies = "http://localhost:3030/movies";
  const urlSeries = "http://localhost:3030/series";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching begins
        let response;

        // Check if movies are in localStorage before making API request
        let lastFetched = Number(localStorage.getItem("moviesLastFetched"));
        const cachedMovies = localStorage.getItem("cachedMovies");
        if (
          cachedMovies &&
          lastFetched &&
          Date.now() - lastFetched <= ONE_WEEK_IN_MS
        ) {
          setMovies(JSON.parse(cachedMovies));
          return;
        }

        response = await axios.get(urlMovies);

        // Cache the movies in localStorage
        localStorage.setItem("cachedMovies", JSON.stringify(response.data));
        localStorage.setItem("moviesLastFetched", Date.now()); // Store the current timestamp
        setMovies(response.data);
        console.log("movie data: ", response.data);
        setIsLoading(false); // Set loading to true when fetching begins
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading to true when fetching begins
      }
    };

    const fetchSeries = async () => {
      try {
        let response;

        // Check if series are in localStorage before making API request
        let lastFetched = Number(localStorage.getItem("seriesLastFetched"));
        const cachedSeries = localStorage.getItem("cachedSeries");

        if (
          cachedSeries &&
          lastFetched &&
          Date.now() - lastFetched <= ONE_WEEK_IN_MS
        ) {
          setSeries(JSON.parse(cachedSeries));
          return;
        }

        response = await axios.get(urlSeries);

        // Cache the movies in localStorage
        localStorage.setItem("cachedSeries", JSON.stringify(response.data));
        localStorage.setItem("seriesLastFetched", Date.now());
        setSeries(response.data);
        console.log("series data: ", response.data);
      } catch (error) {
        console.log(error);
      }
    };
    Promise.all([fetchMovies(), fetchSeries()]).then(() => {
      setIsLoading(false);
    });
  }, [ONE_WEEK_IN_MS]);

  // Get the current date
  const currentDate = new Date();

  return (
    <main className="home">
      <ScrollToTopBtn />
      <section className="main">
        <section className="intro">
          <h1 className="title">
            Trouvez des films & séries adaptées à vos goûts
          </h1>
        </section>
        <section className="movies">
          <h2>Films les mieux notés</h2>
          {isLoading ? (
            <div className="spinner-container">
              <ClipLoader color={"#00ff75"} loading={isLoading} size={65} />
            </div>
          ) : (
            <section className="content-container">
              {/* Sort and Slice the movies Array by Release Date */}
              {movies
                .slice() // Create a shallow copy of the movies array
                .filter(
                  (movie) =>
                    new Date(movie.releaseDate) <= currentDate &&
                    new Date(movie.releaseDate) > new Date("2023-07-01")
                ) // Filter out movies with release dates in the future
                .sort((a, b) => b.score - a.score)
                .slice(0, 24) // Get the 6 most recent movies
                .map((element, index) => {
                  const posterUrl = element.imagePath
                    ? element.imagePath
                    : element.backdropUrl;
                  return (
                    <React.Fragment key={index}>
                      <Card
                        poster={posterUrl}
                        title={element.title}
                        duration={element.duration}
                        id={element._id}
                        slug={element.slug}
                      />
                    </React.Fragment>
                  );
                })}
            </section>
          )}
        </section>
        <section className="series">
          <h2>Séries les mieux notés</h2>
          {isLoading ? (
            <div className="spinner-container">
              <ClipLoader color={"#00ff75"} loading={isLoading} size={65} />
            </div>
          ) : (
            <section className="content-container">
              {/* Sort and Slice the series Array by Release Date */}
              {series
                .slice() // Create a shallow copy of the series array
                .filter(
                  (series) =>
                    new Date(series.releaseDate) <= currentDate &&
                    new Date(series.releaseDate) > new Date("2023-01-01")
                ) // Filter out series with release dates in the future
                .sort((a, b) => b.score - a.score)
                .slice(0, 24) // Get the 6 most recent series
                .map((element, index) => {
                  const posterUrl = element.imagePath
                    ? element.imagePath
                    : element.backdropUrl;
                  return (
                    <React.Fragment key={index}>
                      <Card
                        poster={posterUrl}
                        title={element.title}
                        seasons={element.seasons}
                        id={element._id}
                        slug={element.slug}
                      />
                    </React.Fragment>
                  );
                })}
            </section>
          )}
        </section>
      </section>
    </main>
  );
}
