import { Route, Routes as Rutas } from "react-router-dom";
import Store from "../pages/store/Store";
import Home from "../pages/Home/Home";
import List from "../pages/list/List";
import ProductDetails from "../pages/store/productDetails/ProductDetails";
import Login from "../pages/Login/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Routes = () => {

  const {getAuth} = useContext(AuthContext);

  useEffect(() => {
    getAuth();
  }, [])

  return (
    <Rutas>
      <Route path="/" element={<Home />} />
      <Route exact path="/store" element={<Store />} />
      <Route path="/complejos" element={<List />} />
      <Route
        exact
        path="/store/product/:productId"
        element={<ProductDetails />}
      />
      <Route exact path='/login' element={<Login />} />
    </Rutas>
  );
};

export default Routes;
