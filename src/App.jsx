import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SportCenterDetail from './components/SportCenter/SportCenterDetail';

function App() {

  const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "La Morocha - Fútbol",
    address: "Av. Perón 1226",
    location: `26°48'12.8"S 65°16'44.6"W`,
    photo: "https://imgar.zonapropcdn.com/avisos/1/00/44/29/27/76/720x532/1724306414.jpg",
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
