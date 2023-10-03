import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";

import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import SportCenter from "../pages/sportCenter/SportCenter";
import Contact from "../pages/Contact/Contact";
import SportCenterDetail from "../components/SportCenter/SportCenterDetail";
import OwnerDashboard from "../pages/Dashboard/OwnerDashboard";
import DashboardAdmin from "../pages/Admin/DashboardAdmin";

const Routes = () => {
  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <DashboardAdmin />
          </PrivateRoute>
        }
      />

      <Route
        path="/owner/dashboard"
        element={
          <PrivateRoute>
            <OwnerDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/complejos" element={<SportCenter />} />
      <Route
        path="/store/product/:productId"
        element={
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
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
      <Route
        path="/complejos/:idSportCenter"
        element={<SportCenterDetail />}
      ></Route>
    </Rutas>
  );
};

export default Routes;
