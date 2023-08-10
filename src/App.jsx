import React from "react";
import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
