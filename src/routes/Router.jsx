import {Route , Routes as Ruta} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import SportCenter from '../pages/SportCenter'


const Routes = () => {

    return (
          <>
          <Ruta>
              <Route path="/Dashboard" element={<Dashboard />}/>
              <Route path="/SportCenter" element={<SportCenter/>}/>
          </Ruta>
      </>
    )
  }

  export default Routes;

