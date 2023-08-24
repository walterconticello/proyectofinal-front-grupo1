import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import CardProvider from './context/cardContext';
import Routes from './routes/Router';

function App() {
  
  return (
    <CardProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;