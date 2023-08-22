import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';     
import FieldContext from './context/FieldContext.jsx';

function App() {

  return (
    <> 
      {/* Nav */}
      <FieldContext>
      <Routes />
      </FieldContext>
      {/* Footer */}
    </>
  )
}

export default App
