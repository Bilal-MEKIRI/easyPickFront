import React from "react";
import axios from "axios";
import { useCategory } from "../../categoryContext";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";
import "../../components/resetCSS/reset.scss";
import "./home.scss";
import Slider from "../../components/autoSlider/slider.js";
import Card from "../../components/contentCard/contentCard.js";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  // const urlMovies = "https://easy-puce-coati-tam.cyclic.cloud/movies";
  // const urlSeries = "https://easy-puce-coati-tam.cyclic.cloud/series";
  const urlMovies = "http://localhost:3030/movies";
  const urlSeries = "http://localhost:3030/series";

  const { selectedCategory } = useCategory();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let response;
        if (selectedCategory) {
          response = await axios.get(`${urlMovies}/genre/${selectedCategory}`);
        } else {
          // Check if movies are in localStorage before making API request
          const cachedMovies = localStorage.getItem("cachedMovies");
          if (cachedMovies) {
            setMovies(JSON.parse(cachedMovies));
            return;
          }

          response = await axios.get(urlMovies);

          // Cache the movies in localStorage
          localStorage.setItem("cachedMovies", JSON.stringify(response.data));
        }
        setMovies(response.data);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchSeries = async () => {
      try {
        let response;
        if (selectedCategory) {
          response = await axios.get(`${urlSeries}/genre/${selectedCategory}`);
        } else {
          // Check if series are in localStorage before making API request
          const cachedSeries = localStorage.getItem("cachedSeries");
          if (cachedSeries) {
            setSeries(JSON.parse(cachedSeries));
            return;
          }
          response = await axios.get(urlSeries);

          // Cache the movies in localStorage
          localStorage.setItem("cachedSeries", JSON.stringify(response.data));
        }
        setSeries(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
    fetchSeries();
  }, [selectedCategory]);

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const sanitizedInput = DOMPurify.sanitize(event.target.value);
    setSearchQuery(sanitizedInput);
  };

  // Function to filter movies and series based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSeries = series.filter((series) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get the current date
  const currentDate = new Date();

  return (
    <main className="home">
      <ScrollToTopBtn />
      <section className="main">
        <section className="intro">
          <h1 className="title">Find movies & series that match your vibe!</h1>
          <div className="search-bar">
            <img
              className="search-icon"
              src="/assets/icons/magnifiying-glass.png"
              alt=""
            />
            <input
              className="search-input"
              type="text"
              name="search-bar"
              id="search-bar"
              placeholder="Chercher"
              value={searchQuery}
              onChange={handleSearchInputChange}
            ></input>
          </div>
        </section>
        {/* <div className="slider1">
          <Slider />
        </div> */}
        <section className="trending">
          <h2>Popular movies and series</h2>
          <section className="content-container">
            {/* Sort and Slice the movies Array */}
            {filteredMovies
              .slice() // Create a shallow copy of the movies array
              .filter(
                (movie) =>
                  new Date(movie.releaseDate) <= currentDate &&
                  new Date(movie.releaseDate) > new Date("2023-01-01")
              ) // Filter out movies with release dates in the future
              .sort((a, b) => b.popularity - a.popularity) // Sort movies in descending order of popularity
              .slice(0, 6) // Get the top 6 most popular movies
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
                    />
                  </React.Fragment>
                );
              })}
            {/* Sort and Slice the series Array */}
            {filteredSeries
              .slice() // Create a shallow copy of the series array
              .filter(
                (series) =>
                  new Date(series.releaseDate) <= currentDate &&
                  new Date(series.releaseDate) > new Date("2023-01-01")
              ) // Filter out series with release dates in the future
              .sort((a, b) => b.popularity - a.popularity) // Sort series in descending order of score
              .slice(0, 6) // Get the top 6 most popular series
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
                    />
                  </React.Fragment>
                );
              })}
          </section>
        </section>
        <section className="movies">
          <h2>Top rated movies</h2>
          <section className="content-container">
            {/* Sort and Slice the movies Array by Release Date */}
            {filteredMovies
              .slice() // Create a shallow copy of the movies array
              .filter(
                (movie) =>
                  new Date(movie.releaseDate) <= currentDate &&
                  new Date(movie.releaseDate) > new Date("2023-07-01")
              ) // Filter out movies with release dates in the future
              .sort((a, b) => b.score - a.score)
              .slice(0, 12) // Get the 6 most recent movies
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
                    />
                  </React.Fragment>
                );
              })}
          </section>
        </section>
        <section className="series">
          <h2>Top rated series</h2>
          <section className="content-container">
            {/* Sort and Slice the series Array by Release Date */}
            {filteredSeries
              .slice() // Create a shallow copy of the series array
              .filter(
                (series) =>
                  new Date(series.releaseDate) <= currentDate &&
                  new Date(series.releaseDate) > new Date("2023-01-01")
              ) // Filter out series with release dates in the future
              .sort((a, b) => b.score - a.score)
              .slice(0, 12) // Get the 6 most recent series
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
                    />
                  </React.Fragment>
                );
              })}
          </section>
        </section>
      </section>
    </main>
  );
}
