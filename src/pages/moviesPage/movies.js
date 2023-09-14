import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useMovieCategory } from "../../categoryContext";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import axios from "axios";
import "../../components/resetCSS/reset.scss";
import Card from "../../components/contentCard/contentCard.js";
import "./movies.scss";
import Pagination from "../../components/pagination/pagination";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";
import MoviesCategories from "../../components/categories/moviesCategories";
export default function Movies() {
  const location = useLocation(); // Use useLocation hook to access location state
  const { currentPage: currentPageFromState } = location.state || {}; // Destructure currentPage from state
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(currentPageFromState || 1); // Initialize currentPage from state, default to 1
  const moviesPerPage = 24; // Number of movies to show per page
  const urlMovies = "https://easy-puce-coati-tam.cyclic.cloud/movies";
  // const urlMovies = "http://localhost:3030/movies";
  const { selectedCategory } = useMovieCategory();
  const [categoryBtn, setCategoryBtn] = useState(false);

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
          // Fetch movies from the server since they are not in localStorage
          response = await axios.get(urlMovies);

          // Cache the movies in localStorage
          localStorage.setItem("cachedMovies", JSON.stringify(response.data));
        }
        setMovies(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, [selectedCategory]);

  const handleCategoryBtnClick = async () => {
    await setCategoryBtn(!categoryBtn);
    await console.log("Is category btn clicked: ", categoryBtn);
  };

  // Get the current date
  const currentDate = new Date();

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const sanitizedInput = DOMPurify.sanitize(event.target.value);
    setSearchQuery(sanitizedInput);
    // Reset current page to 1 whenever the search query changes
    setCurrentPage(1);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the total pages and pages range based on the filtered and date-sorted movies
  const sortedAndFilteredMovies = filteredMovies
    .filter((movie) => new Date(movie.releaseDate) <= currentDate)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  const totalPages = Math.ceil(sortedAndFilteredMovies.length / moviesPerPage);
  const maxPagesToShow = 3;
  const pagesRange = Math.min(maxPagesToShow, totalPages);
  const startingPageNumber = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(maxPagesToShow / 2),
      totalPages - maxPagesToShow + 1
    )
  );

  // Function to get movies for the current page
  const getCurrentPageMovies = () => {
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const slicedMovies = sortedAndFilteredMovies.slice(startIndex, endIndex);
    return slicedMovies;
  };

  // Function to handle the next arrow click
  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle the previous arrow click
  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle page number click
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="movies">
      <ScrollToTopBtn />
      <section className="main">
        <section className="intro">
          <h1 className="title">Trouvez votre film préférée</h1>
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
          <div className="categories-container">
            <Link
              className="display-categories"
              onClick={() => {
                handleCategoryBtnClick();
              }}
            >
              Catégories
            </Link>
            {categoryBtn && (
              <MoviesCategories
                handleCategoryBtnClick={handleCategoryBtnClick}
              />
            )}
          </div>
        </section>
        {!searchQuery && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pagesRange={pagesRange}
            startingPageNumber={startingPageNumber}
            handlePageClick={handlePageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        )}
        <section className="movies">
          <h2>Films</h2>
          <section className="content-container">
            {getCurrentPageMovies().map((element, index) => {
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
                    currentPage={currentPage} // Pass currentPage to Card component
                  />
                </React.Fragment>
              );
            })}
          </section>
        </section>
        {!searchQuery && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pagesRange={pagesRange}
            startingPageNumber={startingPageNumber}
            handlePageClick={handlePageClick}
            handlePreviousPageClick={handlePreviousPageClick}
            handleNextPageClick={handleNextPageClick}
          />
        )}
      </section>
    </main>
  );
}
