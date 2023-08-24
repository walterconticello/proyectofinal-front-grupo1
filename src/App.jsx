import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';     
import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import AuthProvider from './context/AuthContext';
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (

    <> 
      <ReserveContext>
    <CenterContext>
      <ProductProvider>
      <FieldContext>
        <AuthProvider>
        <NavBar/>
        <Routes/>
        <Footer />
        </AuthProvider>
      </FieldContext>
        </ProductProvider>
      </CenterContext>
      </ReserveContext>

    </>
  )
}

export default App;
