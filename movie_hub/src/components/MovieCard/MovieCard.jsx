import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./MovieCard.css";

const imagesURL = import.meta.env.VITE_IMG;

import defaultImage from "../../assets/sem_imagem.png";

const MovieCard = ({ movie, showLink = true }) => {
  const posterPath = movie.poster_path
    ? imagesURL + movie.poster_path
    : defaultImage;

  return (
    <div className="movie-card">
      <img src={posterPath} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
