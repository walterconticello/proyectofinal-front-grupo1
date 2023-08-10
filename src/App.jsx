import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SportCenterDetail from './components/SportCenter/SportCenterDetail';

function App() {

  const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "La Morocha - Fútbol",
    // location: "-26.803525, -65.278823",
    location: {
      latitude: "-26.803525",
      longitude: "-65.278823",
    },
    photo: "https://www.economiayviveros.com.ar/imagenes/ciencia-y-arte/cesped-canchas-futbol-1.jpg",
    owner: "ObjectId(owner)",
    description: "Contamos con 10 canchas impecables y vestuarios completos con duchas, bar con parrilla y servicio de comida",
    contact: {
      phone: "+54-381-1532115",
      instagram: "+54-381-1532115",
      facebook: "+54-381-1532115",
    },
    services: {
      showers: true,
      dressingRooms: true,
      bar: false,
      grill: true,
      parking: false,
    },
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
