import { toast } from "react-toastify";
import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (values) => {
    try {
      const response = await axios.post(`/api/auth/login`, values);
      const token = response.data.token;
      console.log(response)
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; // Update to use Bearer token
      localStorage.setItem("token", token);
      setAuthenticated(true);
      setUser(response.data.user);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (values) => {
    try {
      const { data } = await axios.post(`/api/auth/register`, values);
      console.log("Registered user:", data);
      // Manejar respuesta exitosa de registro aquí
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    axios.defaults.headers.common["Authorization"] = ""; // Limpiar el token de autorización
    localStorage.removeItem("token");
    toast.success('Cerraste tu sesion de manera exitosa, vuelve pronto!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return setAuthenticated(false);
      }
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const { data } = await axios.get("/api/auth/check");
      setUser(data.user);
      setAuthenticated(true);
    } catch (error) {
      console.error("Error en getAuth:", error); // Agrega esta línea para registrar el error
      setAuthenticated(false);
      toast.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };


  return (
    <AuthContext.Provider
      value={{ user, authenticated, loading, login, register, logout, getAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;