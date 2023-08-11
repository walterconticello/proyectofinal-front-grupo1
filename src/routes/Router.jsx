import {Route , Routes as Ruta} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'


const Routes = () => {

    return (
          <>
          <Ruta>
              <Route path="/Dashboard" element={<Dashboard />}/>
          </Ruta>
      </>
    )
  }

  export default Routes;

