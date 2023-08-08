import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SportCenterDetail from './components/SportCenter/SportCenterDetail';

function App() {

  const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "La Morocha - Fútbol",
    address: "Av. Perón 1226",
    // location: `26°48'12.8"S 65°16'44.6"W`,
    latitude: `26°48'12.8"S`,
    longitude: `65°16'44.6"W`,
    photo: "https://w.forfun.com/fetch/c7/c72f15ffce0daa5d30436b7ddf5bc6c4.jpeg",
    owner: "ObjectId(owner)",
    isActive: true,
  }

  return (
    <>
      <Navbar />
      <SportCenterDetail sportCenter={sportCenter}></SportCenterDetail>
      <Footer />
    </>
  );
}

export default App;
