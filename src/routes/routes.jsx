
import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Contact from "../pages/Contact";
import Home from "../pages/Home/Home";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Error404 from "../pages/Error404/Error404";

const Routes = () => {
  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route exact path="/contact" element={<Contact />} />
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
      <Route path="/*" element={<Error404 />} />
    </Rutas>
  );
};

export default Routes;
