import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	const login = async (values) => {
		try {
			const { data } = await axios.post("/api/auth/login", values);
			setAuthenticated(!!data.user);
			setUser(data.user);
			axios.defaults.headers.common["access_token"] = data.token;
			localStorage.setItem("access_token", data.token);
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	const register = async (values) => {
		try {
			const { data } = await axios.post("/api/auth/register", values);
			console.log("Registered user:", data);
		} catch (error) {
			console.error("Register error:", error);
		}
	};

	const getAuth = async () => {
		try {
			const token = localStorage.getItem("access_token");
			if (!token) {
				setLoading(false);
				return setAuthenticated(false);
			}
			axios.defaults.headers.common["access_token"] = token;
			const { data } = await axios.get("/api/users/authStatus");
			setUser(data.user);
			setAuthenticated(true);
		} catch (error) {
			setAuthenticated(false)
			console.error("Error de autenticación. Ingrese nuevamente");
		}
		setLoading(false);
	};

	const logout = () => {
		setUser(null);
		setAuthenticated(false);
		axios.defaults.headers.common["access_token"] = "";
		localStorage.removeItem("access_token");
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
