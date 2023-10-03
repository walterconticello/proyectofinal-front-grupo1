import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
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
      {/* <Route path="/admin/Reservation" element={<Reservation />} />
      <Route path="/admin/Users" element={<Users />} />
      <Route path="/admin/products" element={<Products />} /> */}

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
      <Route
        path="/detail"
        element={
          <SportCenterDetail
            idSportCenter={"6506441ce5b61592c0a44bef"}
          ></SportCenterDetail>
        }
      ></Route>
    </Rutas>
  );
};

export default Routes;
