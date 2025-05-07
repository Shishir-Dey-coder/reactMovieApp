import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>MovieLand</h1>
        <p>Discover your next favorite movie</p>
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={onSearch}
        />
      </div>
    </header>
  );
};

export default Header;