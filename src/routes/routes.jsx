import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import SportCenterDetail from "../components/SportCenter/SportCenterDetail";
const Routes = () => {
  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/complejos" element={<List />} />
      <Route path="/store/product/:productId" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
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
