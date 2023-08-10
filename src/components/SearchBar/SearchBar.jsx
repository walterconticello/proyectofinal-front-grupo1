import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    props.onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <form>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button onClick={handleSearch}>Buscar</button>
      </form>
    </div>
  );
}

export default SearchBar;