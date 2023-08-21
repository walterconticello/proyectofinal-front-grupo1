import React from "react";
import { Route, Routes as Rutas } from "react-router-dom";

import AboutUs from "../pages/AboutUs";

const Routes = () => {
    return (
        <Rutas>
        <Route path="/about-us" element={<AboutUs />} />
        </Rutas>
    );
    }

export default Routes;

