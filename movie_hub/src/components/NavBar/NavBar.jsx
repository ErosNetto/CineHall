import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav className="navbar">
      <h2>
        <Link to="/" aria-label="Home">
          <BiCameraMovie />
          MovieHub
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          aria-label="Busca de filme"
        />
        <button type="submit" aria-label="Buscar filme">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
