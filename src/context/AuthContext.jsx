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
			// console.log("User data:", data);
			console.log("Token:", data.token);
			setUser(data);
			setAuthenticated(true);
			axios.defaults.headers.common["Authorization"] = data.token;
			localStorage.setItem("access_token", data.token);
		} catch (error) {
			console.error("Login error:", error);
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
				axios.defaults.headers.common["Authorization"] = token;
				setAuthenticated(true);
			} catch (error) {
				setLoading(false);
				setUser(null);
				setAuthenticated(false);
				axios.defaults.headers.common["Authorization"] = "";
				localStorage.removeItem("access_token");
			}
		}
		checkAuth();
	}, []);

	return (
		<AuthContext.Provider
			value={{ user, authenticated, loading, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
