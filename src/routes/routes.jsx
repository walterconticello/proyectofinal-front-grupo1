// Routes.jsx
import React from "react";
import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";

import ProductDetails from "../pages/store/productDetails/ProductDetails";

const Routes = () => {
  return (
    <Rutas>
      <Route exact path="/" />
      <Route exact path="/store" element={<Store />} />
      <Route
        exact
        path="/store/product/:productId"
        element={<ProductDetails />}
      />
      <Route exact path="/*" element={<p>404 NOT FOUND</p>} />
    </Rutas>
  );
};

export default Routes;
