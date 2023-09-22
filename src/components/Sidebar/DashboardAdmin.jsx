import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DashboardAdmin.css';

const SidebarDashboard = ({collapsed}) => {

  return (
    <>
    <Sidebar collapsed={collapsed}>
  <Menu>
    <SubMenu label="Owner">
      <MenuItem> 
      <Link to={"/admin/SportCenter"}>
      Complejos </Link></MenuItem>
      <MenuItem> <Link to={"/admin/Field"}>
        Canchas</Link> </MenuItem>
    </SubMenu>
    <MenuItem>   <Link to={"/admin/Reservation"}>
    Reservaciones
    </Link>
    </MenuItem>
    <MenuItem> <Link to={"/admin/Users"} >Productos</Link> </MenuItem>
    <MenuItem><Link to={"/admin/Users"} > Usuarios</Link></MenuItem>
  </Menu>
</Sidebar>

</>
  )
}

export default SidebarDashboard;