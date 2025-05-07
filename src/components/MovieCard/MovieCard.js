import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="poster-placeholder">
            <span>No Image Available</span>
          </div>
        )}
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <div className="movie-meta">
          <span>{movie.Year}</span>
          <span>{movie.Type}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;