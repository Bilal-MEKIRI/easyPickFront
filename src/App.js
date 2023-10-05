import "./App.css";
import {
  MovieCategoryProvider,
  SeriesCategoryProvider,
} from "./categoryContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import Template from "./components/template";
import Contact from "./pages/contactPage/contact";
import Movies from "./pages/moviesPage/movies";
import Series from "./pages/seriesPage/series";
import MovieDetails from "./pages/movieDetails/movieDetails.js";
import Privacy from "./components/privacyPolicy/privacyPolicy.js";
import Terms from "./components/termsOfUse/termsOfUse";
import ResetPageScroll from "./components/resetPageScroll/resetPageScroll";
import Login from "./pages/loginPage/login";
import SignIn from "./pages/signInPage/signIn";

function App() {
  return (
    <div>
      <ResetPageScroll />
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/movies"
            element={
              <MovieCategoryProvider>
                <Movies />
              </MovieCategoryProvider>
            }
          ></Route>
          <Route
            path="/series"
            element={
              <SeriesCategoryProvider>
                <Series />
              </SeriesCategoryProvider>
            }
          ></Route>

          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/:slug"
            element={<MovieDetails pageType="home" />}
          ></Route>
          <Route
            path="/movies/:slug"
            element={<MovieDetails pageType="movies" />}
          ></Route>
          <Route
            path="/series/:slug"
            element={<MovieDetails pageType="series" />}
          ></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
