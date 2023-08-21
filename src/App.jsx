import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import { BrowserRouter } from 'react-router-dom';
import Slider from './components/carouselPromo/carouselPromo';
import { CardProvider } from './context/cardContext';
import Routes from './routes/Router';





function App() {
  
  return (
    <CardProvider>
      <BrowserRouter>
        <Navbar />
        <Slider />
        <SearchBar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;