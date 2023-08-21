import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './context/AuthContext'

function App() {


  return (
    <>
      <AuthProvider>
        <Navbar />
        <Login />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
