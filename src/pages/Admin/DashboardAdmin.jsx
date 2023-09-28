import SportCenters from '../../components/Admin/SportCenters'
import Sales from '../../components/Admin/Sales'
import User from '../../components/Admin/User'
import { useContext, useEffect } from 'react'
import { CenterContext } from '../../context/CenterContext'
import { SalesContext } from '../../context/SalesContext'
import { AuthContext } from '../../context/AuthContext'

const DashboardAdmin = () => {
  const { getSportCenter , complex } = useContext(CenterContext);
  const { user } = useContext(AuthContext);
  const { getSales , sales } = useContext(SalesContext);

  useEffect(() => {  
    getSportCenter();
    getSales();
  }, [])
  
    
  return (
    <>
    <SportCenters complex={complex} />
    <Sales sales={sales}/>
    <User users={user}/>
    </>
  )
}

export default DashboardAdmin