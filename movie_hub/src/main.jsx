import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./index.css";

// Components
import App from "./App.jsx";

// Pages
import Movie from "./pages/Movie/Movie.jsx";
import Search from "./pages/Search.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
