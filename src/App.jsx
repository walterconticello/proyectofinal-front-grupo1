import React from 'react';
import CardList from './components/CardList/CardList';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const cards = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 1',
      description: 'This is the description for card 1.',
      link: '#',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 2',
      description: 'This is the description for card 2.',
      link: '#',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      title: 'Card 3',
      description: 'This is the description for card 3.',
      link: '#',
    },
  ];

  return (
    <>
      <Navbar />
      <SearchBar />
      <CardList cards={cards} />
      <Footer />
    </>
  );
}

export default App;