import { Route, Routes as Ruta } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import SportCenter from "../pages/SportCenter";
import Fields from "../pages/Fields";
import Reservation from "../components/Cards/Reservations";
import Users from "../pages/Users";
import Products from "../pages/Products";

const Routes = () => {
  return (
    <>
      <Ruta>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/SportCenter" element={<SportCenter />} />
        <Route path="/Field" element={<Fields />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
      </Ruta>
    </>
  );
};

export default Routes;
