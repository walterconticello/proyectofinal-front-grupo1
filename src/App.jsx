
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider, { AuthContext } from "./context/AuthContext";

import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import { SalesProvider } from "./context/SalesContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    // <>
    //   <Navbar />
    //   <SportCenterDetail idSportCenter={"6506441ce5b61592c0a44bef"}></SportCenterDetail>
    //   <Footer />
    // </>
    <AuthProvider>
      <ScrollToTop />
      <Layout>
        <Routes />
        <ToastContainer />
      </Layout>
    </AuthProvider>
  );

}

export default App;
