import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext(); //universo. Todo lo que este aqui adentro va a tener acceso a los usuarios

// eslint-disable-next-line react/prop-types
const UserContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = import.meta.env.VITE_DB;

  useEffect(() => {
    getUsers();
  }, [setLoading]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`api/users/`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //peticion de Post

  const addUser = async (users) => {
    try {
      const response = axios.post(`api/users/`, users);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  //Put
  const updateUser = async (usuario) => {
    try {
      await axios.put(`api/users/${usuario.id}`, usuario);
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

  const viewProfileId = async (id) => {
    console.log(id);
    try {
      await axios.get(`api/users/${id}`);
      const viewUser = users.filter((usuario) => usuario.id !== id);
      console.log(viewUser);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        setUsers,
        logout,
        addUser,
        deleteUser,
        viewProfileId,
        updateUser,
        loading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserContext;
