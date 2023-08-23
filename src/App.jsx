import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';     
import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';
import NavBar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Login from "./components/Login/Login"
import AuthProvider from './context/AuthContext';
import React from "react";
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/common/Layout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AuthProvider from "./context/AuthContext";

function App() {


  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App;
