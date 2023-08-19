import "./App.css";
import { CategoryProvider } from "./categoryContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import Template from "./components/template";
import Contact from "./pages/contactPage/contact";
import Movies from "./pages/moviesPage/movies";
import Series from "./pages/seriesPage/series";
import Login from "./pages/loginPage/login";
import MovieDetails from "./pages/movieDetails/movieDetails.js";

function App() {
  return (
    <CategoryProvider>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/series" element={<Series />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:id" element={<MovieDetails pageType="home" />}></Route>
          <Route
            path="/movies/:id"
            element={<MovieDetails pageType="movies" />}
          ></Route>
          <Route
            path="/series/:id"
            element={<MovieDetails pageType="series" />}
          ></Route>
        </Route>
      </Routes>
    </CategoryProvider>
  );
}

export default App;
