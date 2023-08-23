import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';     
import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import AuthProvider from './context/AuthContext';

function App() {

  return (
    <> 
      <ReserveContext>
    <CenterContext>
      <FieldContext>
        <AuthProvider>
        <NavBar/>
        <Routes/>
        <Footer />
        </AuthProvider>
      </FieldContext>
      </CenterContext>
      </ReserveContext>

    </>
  ) 
}

export default App
