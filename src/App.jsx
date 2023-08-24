
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider from "./context/AuthContext";
import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
      <ReserveContext>
    <CenterContext>
      <ProductProvider>
      <FieldContext>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes />
            <ToastContainer />
          </Layout>
        </BrowserRouter>
        </FieldContext>
        </ProductProvider>
      </CenterContext>
      </ReserveContext>
      </ProductProvider>
    </AuthProvider>

  );

}

export default App;
