import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SportCenterDetail from './components/SportCenter/SportCenterDetail';

function App() {
  return (
    <>
      <Navbar />
      <SportCenterDetail idSportCenter={"6506441ce5b61592c0a44bef"}></SportCenterDetail>
      <Footer />
    </>
  );
}

export default App;
