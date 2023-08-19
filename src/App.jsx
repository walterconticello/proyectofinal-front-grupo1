import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import CardSportCenter from './components/cardSportCenter/CardSportCenter';
import { BrowserRouter } from 'react-router-dom';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <CardSportCenter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;