import { toast } from "react-toastify";
import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  // console.log(users, "from auth context");

  const login = async (values) => {
    try {
      const response = await axios.post(`api/auth/login`, values);
      const token = response.data.token;
      console.log(response);
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
      const { data } = await axios.post(`api/auth/register`, values);
      console.log("Registered user:", data);
      // Manejar respuesta exitosa de registro aquí
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };
  const updateUser = async (id, updatedData, makeOwner = false) => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const userData = {
        ...updatedData,
        isOwner: makeOwner ? true : updatedData.isOwner,
      };
      const response = await axios.put(`/api/users/${id}`, userData);
      const updatedUser = response.data;
      setUser(updatedUser);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    axios.defaults.headers.common["Authorization"] = ""; // Limpiar el token de autorización
    localStorage.removeItem("token");
    toast.success("Cerraste tu sesion de manera exitosa, vuelve pronto!", {
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
      const { data } = await axios.get("api/auth/check");
      setUser(data.user);
      setAuthenticated(true);
    } catch (error) {
      console.error("Error en getAuth:", error); // Agrega esta línea para registrar el error
      setAuthenticated(false);
      toast.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`/api/users/`);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`api/users/${id}`);
      const deleteUsuario = users.filter((usuario) => usuario.id !== id);
      setUsers(deleteUsuario);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  const getUserId = async (id) => {
    console.log(id);
    try {
      await axios.get(`api/users/${id}`);
      const response = users.filter((usuario) => usuario.id !== id);
      setUser(response.data);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        getUsers,
        getUserId,
        deleteUser,
        updateUser,
        authenticated,
        loading,
        login,
        register,
        logout,
        getAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
