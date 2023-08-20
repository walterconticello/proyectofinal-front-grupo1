import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import CardSportCenter from './components/cardSportCenter/CardSportCenter';
import { BrowserRouter } from 'react-router-dom';
import Slider from './components/carouselpromo/carouselPromo';




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
        <Slider />
        </div>
        <div>
        <SearchBar />
        </div>
        <CardSportCenter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;