import { Route, Routes as Rutas } from "react-router-dom";
import SportCenter from "../pages/SportCenter"

const Routes = () => {
    return (
        <Rutas>
            <Route exact path="/SportCenter" element={<SportCenter />} />
        </Rutas>
    );
};

export default Routes;

// Path: src\components\cardSportCenter\CardSportCenter.jsx
