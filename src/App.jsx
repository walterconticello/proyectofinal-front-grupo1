
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes />
            <ToastContainer />
          </Layout>
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>

  );
}

export default App;
