import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Main/Movies/Movie/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/filme/:id" element={<Movie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
