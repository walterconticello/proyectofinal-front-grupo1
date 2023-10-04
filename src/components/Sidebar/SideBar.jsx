import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Button, Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DashboardAdmin.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const SidebarDashboard = ({ collapsed }) => {
  const [openSideBar, setOpenSideBar] = useState(collapsed);
  return (
    <>
      <Menu className="sideBarDashboard">
        <SubMenu label="Owner">
          <MenuItem>
            <Link to={"/admin/SportCenter"}>Complejos </Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to={"/admin/Field"}>Canchas</Link>{" "}
          </MenuItem>
        </SubMenu>
        <MenuItem>
          {" "}
          <Link to={"/admin/Reservation"}>Reservaciones</Link>
        </MenuItem>
        <MenuItem>
          {" "}
          <Link to={"/admin/products"}>Tienda</Link>{" "}
        </MenuItem>
        <MenuItem>
          <Link to={"/admin/Users"}> Usuarios</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default SidebarDashboard;
