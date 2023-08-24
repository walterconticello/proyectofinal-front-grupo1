import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"


// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default Layout