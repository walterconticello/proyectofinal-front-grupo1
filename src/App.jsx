
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider from "./context/AuthContext";

import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import { SalesProvider } from "./context/SalesContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>    
    <SalesProvider>
      <ProductProvider>
      <ReserveContext>
    <CenterContext>
      <ProductProvider>
      <FieldContext>  
          <ScrollToTop />
          <Layout>
            <Routes />
            <ToastContainer />
          </Layout>
        </FieldContext>
        </ProductProvider>
      </CenterContext>
      </ReserveContext>
      </ProductProvider>
    </SalesProvider>
    </AuthProvider>

  );

}

export default App;
