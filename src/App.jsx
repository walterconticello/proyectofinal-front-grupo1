import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Router';     
import FieldContext from './context/FieldContext.jsx';
import CenterContext from './context/CenterContext';
import ReserveContext from './context/ReservationContext';

function App() {

  return (
    <> 
      {/* Nav */}
      <ReserveContext>
    <CenterContext>
      <FieldContext>
      <Routes />
      </FieldContext>
      </CenterContext>
      </ReserveContext>
      {/* Footer */}
    </>
  ) 
}

export default App
