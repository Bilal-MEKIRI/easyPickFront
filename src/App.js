import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/home";
import Template from "./components/template";
import Contact from "./pages/contactPage/contact";
import Movies from "./pages/moviesPage/movies";
import Series from "./pages/seriesPage/series";
import Login from "./pages/loginPage/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
