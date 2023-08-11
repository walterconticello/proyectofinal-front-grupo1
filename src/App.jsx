import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';
import  UserContext from './context/UserContext'

function App() {

  return (
    <>
    <UserContext>
      <Routes />
      </UserContext>

    </>
  )
}

export default App
