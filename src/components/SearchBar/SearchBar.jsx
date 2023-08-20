import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
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
    <Form>
      <FormControl
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar"
        className="sm-2"
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Buscar
      </Button>
    </Form>
  );
}

export default SearchBar;