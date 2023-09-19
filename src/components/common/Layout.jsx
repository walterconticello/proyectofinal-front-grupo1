import { useContext, useEffect } from "react";
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import { AuthContext } from "../../context/AuthContext";


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
	const { authenticated, loading, getAuth } = useContext(AuthContext);

	useEffect(() => {
		getAuth();
	}, [])

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout