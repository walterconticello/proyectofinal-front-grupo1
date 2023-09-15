import jwtDecode from "jwt-decode";
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
      const token = response.data.data.token;
      const decodedToken = jwtDecode(token); // Decodifica el token
      console.log("Token:", token);
      console.log("Decoded Token:", decodedToken);
      setUser(decodedToken);
      setAuthenticated(true);
      axios.defaults.headers.common["access_token"] = token;
      localStorage.setItem("access_token", token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (values) => {
    try {
      const { data } = await axios.post(`/api/auth/register`, values);
      console.log("Registered user:", data);
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("access_token");
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          setLoading(false);
          return;
        }
        axios.defaults.headers.common["access_token"] = token;
        setAuthenticated(true);
      } catch (error) {
        setLoading(false);
        setUser(null);
        setAuthenticated(false);
        axios.defaults.headers.common["access_token"] = "";
        localStorage.removeItem("access_token");
      }
    }
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, authenticated, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
