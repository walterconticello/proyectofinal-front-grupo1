import {Route , Routes as Ruta} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard'
import SportCenter from '../pages/SportCenter'
import Fields from '../pages/Fields'
import Reservation from '../components/Cards/Reservations'
import Users from '../pages/Users'



const Routes = () => {

    return (
          <>
          <Ruta>
              <Route path="/Dashboard" element={<Dashboard />}/>
              <Route path="/SportCenter" element={<SportCenter/>}/>
              <Route path="/Field" element={<Fields/>} />
              <Route path='/Reservation' element={<Reservation/>} />
              <Route path='/Users' element={<Users/>} />
          </Ruta>
      </>
    )
  }

  export default Routes;

