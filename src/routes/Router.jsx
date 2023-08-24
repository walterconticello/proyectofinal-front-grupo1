<<<<<<< HEAD
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
=======
import {Route , Routes as Ruta} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import SportCenter from '../pages/SportCenter'
import Fields from '../pages/Fields'
import Reservation from '../components/Cards/Reservations'
import Users from '../pages/Users'
import Login from "../components/Login/Login"
import Products from "../pages/Products";




const Routes = () => {
  return (
    <>
      <Ruta>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/SportCenter" element={<SportCenter />} />
        <Route path="/admin/Field" element={<Fields />} />
        <Route path="/admin/Reservation" element={<Reservation />} />
        <Route path="/admin/Users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route exact path='/login' element={<Login />} />
      </Ruta>
    </>
  );
};


  export default Routes;

  
  //         <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
  //         <Route path="/admin/SportCenter" element={<PrivateRoute><SportCenter /></PrivateRoute>} />
  //         <Route path="/admin/Field" element={<PrivateRoute><Fields /></PrivateRoute>} />
  //         <Route path="/admin/Reservation" element={<PrivateRoute><Reservation /></PrivateRoute>} />
  //         <Route path="/admin/Users" element={<PrivateRoute><Users /></PrivateRoute>} />
  //         <Route path="/admin/products" element={<PrivateRoute><Products /></PrivateRoute>} />
  //         <Route exact path='/login' element={<Login />} />
>>>>>>> dev
