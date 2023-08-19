import React from "react";
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
      <Navbar />
        <Routes />
      <Footer />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
