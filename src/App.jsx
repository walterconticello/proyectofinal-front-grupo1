import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider, { AuthContext } from "./context/AuthContext";

import FieldContext from "./context/FieldContext.jsx";
import CenterContext from "./context/CenterContext";
import ReservationProvider from "./context/ReservationContext";
import SalesProvider from "./context/SalesContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <CenterContext />
      <ReservationProvider />
      <FieldContext />
      <SalesProvider />
      <ProductProvider />
      <ScrollToTop />
      <Layout>
        <Routes />
        <ToastContainer />
      </Layout>
      {/* </ProductProvider>
            </SalesProvider>
          </FieldContext>
        </ReservationProvider>
  </CenterContext>*/}
    </AuthProvider>
  );
}

export default App;
