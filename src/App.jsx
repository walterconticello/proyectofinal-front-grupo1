import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SportCenterDetail from './components/SportCenter/SportCenterDetail';

function App() {

  const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "La Morocha - Fútbol",
    address: "Av. Perón 1226",
    location: `26°48'12.8"S 65°16'44.6"W`,
    photo: "https://esteeselfamosoriver.com/wp-content/uploads/2019/03/imagenes-de-river-plate-para-fondos-de-pantalla-para-celular-wallpaper-de-river-escudo-river-plate-1-1080x1200.jpg",
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
