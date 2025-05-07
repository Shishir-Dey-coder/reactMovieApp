import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h3>Oops!</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No movies found</h3>
          <p>Try searching for something else</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;