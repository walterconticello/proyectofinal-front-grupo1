import React from "react";
import { Route, Routes as Rutas } from "react-router-dom";

import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Rutas>
      <Route exact path="/contact" element={<Contact />} />

      <Route exact path="/*" element={<p>404 NOT FOUND</p>} />
    </Rutas>
  );
};

export default Routes;
