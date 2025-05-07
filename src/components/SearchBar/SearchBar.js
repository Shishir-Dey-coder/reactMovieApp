import React from 'react';
import SearchIcon from '../../assets/search.svg';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for movies..."
        aria-label="Search movies"
      />
      <button onClick={onSearch} aria-label="Search">
        <img src={SearchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;