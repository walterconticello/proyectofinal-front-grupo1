import {Route , Routes as Ruta} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import SportCenter from '../pages/SportCenter'
import Fields from '../pages/Fields'



const Routes = () => {

    return (
          <>
          <Ruta>
              <Route path="/Dashboard" element={<Dashboard />}/>
              <Route path="/SportCenter" element={<SportCenter/>}/>
              <Route path="/Field" element={<Fields/>} />

          </Ruta>
      </>
    )
  }

  export default Routes;

