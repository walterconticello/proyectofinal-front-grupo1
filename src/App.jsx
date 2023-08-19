import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import CardSportCenter from './components/cardSportCenter/CardSportCenter';


function App() {
  
  return (
    <>
      <Navbar />  
      <SearchBar /> 
      <CardSportCenter />
      <Footer />
    </>
  );
}

export default App;