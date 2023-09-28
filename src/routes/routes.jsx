import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import SportCenter from "../pages/Dashboard/SportCenter";
import Fields from "../pages/Dashboard/Fields";
import Reservation from "../components/Cards/Reservations";
import Users from "../pages/Dashboard/Users";
import Products from "../pages/Dashboard/Products";
import Contact from "../pages/Contact/Contact";
import OwnerDashboard from "../pages/Dashboard/OwnerDashboard";
import DashboardAdmin from "../pages/Admin/DashboardAdmin";

const Routes = () => {
  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/SportCenter" element={<SportCenter />} />
      <Route
        path="/admin/Field"
        element={
          <PrivateRoute>
            <Fields />
          </PrivateRoute>
        }
      />
      <Route path="/admin/Reservation" element={<Reservation />} />
      <Route path="/admin/Users" element={<Users />} />
      <Route path="/admin/products" element={<Products />} />

      <Route path="/admin/dashboard" element={<PrivateRoute><DashboardAdmin /></PrivateRoute>} />

      <Route
        path="/owner/dashboard"
        element={
          <PrivateRoute>
            <OwnerDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/complejos" element={<List />} />
      <Route path="/store/product/:productId" element={<ProductDetails />} />
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
