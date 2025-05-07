import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import MovieList from './components/MovieList/MovieList';
import './App.css';

const API_URL = 'https://www.omdbapi.com?apikey=5f94e853';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    searchMovies('Avengers');
  }, []);

  const searchMovies = async (title) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || 'No movies found');
      }
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={() => searchMovies(searchTerm)}
      />
      
      <main className="app-main">
        <MovieList 
          movies={movies}
          loading={loading}
          error={error}
        />
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} MovieLand - Powered by OMDB API</p>
      </footer>
    </div>
  );
};

export default App;