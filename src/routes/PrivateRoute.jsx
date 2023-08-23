import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
	const { getAuth, authenticated, loading } = useContext(AuthContext)

	console.log(authenticated)

	useEffect(() => {
		getAuth();
	}, [])

	return loading ? (
		<></>
	) : authenticated ? (
		children
	) : (
		<Navigate to="/login" />
	);
};

export default PrivateRoute