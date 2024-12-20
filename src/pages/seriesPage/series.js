import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "../../components/resetCSS/reset.scss";
import Card from "../../components/contentCard/contentCard.js";
import Pagination from "../../components/pagination/pagination";
import { useSeriesCategory } from "../../categoryContext";
import { useLocation } from "react-router-dom"; // Import useLocation
import { ClipLoader } from "react-spinners";
import "./series.scss";
import axios from "axios";
import ScrollToTopBtn from "../../components/scrollToTopBtn/scrollToTopBtn";
import SeriesCategories from "../../components/categories/seriesCategories.js";

export default function Series() {
  const location = useLocation(); // Use useLocation hook to access location state
  const { currentPage: currentPageFromState } = location.state || {}; // Destructure currentPage from state
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(currentPageFromState || 1); // Initialize currentPage from state, default to 1
  const seriesPerPage = 24; // Number of series to show per page
  const urlSeries = "https://easypickback-production.up.railway.app/series";
  // const urlSeries = "http://localhost:3030/series";
  const { selectedCategory } = useSeriesCategory();
  const [categoryBtn, setCategoryBtn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000; //Milliseconds in one week

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        setIsLoading(true); // Set loading to true when fetching begins
        let response;
        if (selectedCategory) {
          response = await axios.get(`${urlSeries}/genre/${selectedCategory}`);
        } else {
          // Check if movies are in localStorage before making API request
          let lastFetched = Number(localStorage.getItem("seriesLastFetched"));
          const cachedSeries = localStorage.getItem("cachedSeries");
          if (
            cachedSeries &&
            lastFetched &&
            Date.now() - lastFetched <= ONE_WEEK_IN_MS
          ) {
            setSeries(JSON.parse(cachedSeries));
            setIsLoading(false); // Data has been set, stop the loader
            return;
          }
          // Fetch movies from the server since they are not in localStorage
          response = await axios.get(urlSeries);

          // Cache the movies in localStorage
          localStorage.setItem("cachedSeries", JSON.stringify(response.data));
          localStorage.setItem("seriesLastFetched", Date.now().toString());
        }

        setSeries(response.data);
        setIsLoading(false); // Data has been set, stop the loader
      } catch (error) {
        console.error(error);
        setIsLoading(false); // Set loading to false when fetching ends
      }
    };

    fetchSeries();
  }, [selectedCategory, ONE_WEEK_IN_MS]);

  const handleCategoryBtnClick = () => {
    setCategoryBtn(!categoryBtn);
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

  const filteredSeries = series.filter((series) =>
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the total pages and pages range based on the filtered and date-sorted series
  const sortedAndFilteredSeries = filteredSeries
    .filter((movie) => new Date(movie.releaseDate) <= currentDate)
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

  const totalPages = Math.ceil(sortedAndFilteredSeries.length / seriesPerPage);
  const maxPagesToShow = 3;
  const pagesRange = Math.min(maxPagesToShow, totalPages);
  const startingPageNumber = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(maxPagesToShow / 2),
      totalPages - maxPagesToShow + 1
    )
  );

  // Function to get series for the current page
  const getCurrentPageSeries = () => {
    const startIndex = (currentPage - 1) * seriesPerPage;
    const endIndex = startIndex + seriesPerPage;
    const slicedMovies = sortedAndFilteredSeries.slice(startIndex, endIndex);
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
    <main className="series">
      <ScrollToTopBtn />
      <section className="main">
        <section className="intro">
          <h1 className="title">Trouvez votre série préférée</h1>
          <div className="search-bar">
            <img
              className="search-icon"
              src="/assets/icons/magnifiying-glass.png"
              alt="icone d'une loupe"
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
              <SeriesCategories
                handleCategoryBtnClick={handleCategoryBtnClick}
              />
            )}
          </div>
        </section>
        {isLoading ? (
          <div className="spinner-container">
            <ClipLoader color={"#00ff75"} loading={isLoading} size={65} />
          </div>
        ) : (
          <>
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
            <section className="series">
              <h2>Séries</h2>
              <section className="content-container">
                {/* Sort and Slice the series Array */}
                {getCurrentPageSeries().map((element, index) => {
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
          </>
        )}
      </section>
    </main>
  );
}
