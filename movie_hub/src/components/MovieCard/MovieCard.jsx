import { Link } from "react-router-dom";
import "./MovieCard.css";

const imagesURL = import.meta.env.VITE_IMG;

import defaultImage from "../../assets/sem_imagem.png";

const MovieCard = ({ movie }) => {
  const posterPath = movie.poster_path
    ? imagesURL + movie.poster_path
    : defaultImage;

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={posterPath} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
