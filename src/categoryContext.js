import React, { createContext, useContext, useState, useEffect } from "react";

const MovieCategoryContext = createContext();
const SeriesCategoryContext = createContext();

export function useMovieCategory() {
  return useContext(MovieCategoryContext);
}

export function useSeriesCategory() {
  return useContext(SeriesCategoryContext);
}

export function MovieCategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return sessionStorage.getItem("movieSelectedCategory") || null;
  });

  useEffect(() => {
    if (selectedCategory !== null) {
      sessionStorage.setItem("movieSelectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("movieSelectedCategory");
    }
  }, [selectedCategory]);

  return (
    <MovieCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </MovieCategoryContext.Provider>
  );
}

export function SeriesCategoryProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return sessionStorage.getItem("seriesSelectedCategory") || null;
  });

  useEffect(() => {
    if (selectedCategory !== null) {
      sessionStorage.setItem("seriesSelectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("seriesSelectedCategory");
    }
  }, [selectedCategory]);

  return (
    <SeriesCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SeriesCategoryContext.Provider>
  );
}
