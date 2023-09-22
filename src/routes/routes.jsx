import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import SportCenter from "../pages/SportCenter";
import Fields from "../pages/Fields";
import Reservation from "../components/Cards/Reservations";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Contact from "../pages/Contact/Contact";

const Routes = () => {
  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route
        path="/admin"
        element={
          <Dashboard />
        }
      />
      <Route
        path="/admin/SportCenter"
        element={
          <SportCenter />
        }
      />
      <Route
        path="/admin/Field"
        element={
          <Fields />
        }
      />
      <Route
        path="/admin/Reservation"
        element={
          <Reservation />
        }
      />
      <Route
        path="/admin/Users"
        element={
          <Users />
        }
      />
      <Route
        path="/admin/products"
        element={
          <Products />
        }
      />

      <Route path="/complejos" element={<List />} />
      <Route
        path="/store/product/:productId"
        element={
          <ProductDetails />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/perfil"
        element={
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        }
      />
    </Rutas>
  );
};

export default Routes;
