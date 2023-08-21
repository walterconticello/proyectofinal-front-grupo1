import { Route, Routes as Rutas } from "react-router-dom";
import CardSportCenter from "../components/cardSportCenter/CardSportCenter";

const Routes = () => {
    return (
        <Rutas>
            <Route exact path="/" element={<CardSportCenter />} />
        </Rutas>
    );
};

export default Routes;

// Path: src\components\cardSportCenter\CardSportCenter.jsx
