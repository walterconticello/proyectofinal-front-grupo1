import { Container, Figure, Button, Image } from "react-bootstrap";
import RecentTable from "../../components/Reservation/Recent";
import ProductTable from "../../components/ProductTable/ProductTable"
import Active from "../../components/Reservation/Active.jsx";
import { Pending } from "../../components/Reservation/Pending";
import { useState } from "react";
import SidebarDashboard from "../../components/Sidebar/SideBar";
import "./Dashboard.css";
import { Canceled } from "../../components/Reservation/Canceled";
import { ReservationContext } from "../../context/ReservationContext";
import { useContext } from "react";

import CardCenter from "../../components/Cards/CardCenter";
import SportCenterTable from "../../components/SportCenterTable/SportCenterTable";

export const Dashboard = () => {
  const { getReservations } = useContext(ReservationContext);
  // console.log(getReservations);
  const [collapsed, setCollapsed] = useState(true);

  const { bookings } = useContext(ReservationContext);

  let active = 0;
  let pending = 0;
  let canceled = 0;

  const Reservation = () => {
    for (let i = 0; i < bookings.length; i++) {
      if (bookings[i].Status == "pendiente") {
        pending++;
      } else if (bookings[i].Status == "confirmada") {
        active++;
      } else if (bookings[i].Status == "cancelada") canceled++;
    }
  };

  Reservation();
  return (
    <>
  <Container fluid className='d-flex flex-row p-0'>
      <Container className={`d-flex flex-row p-0 ${collapsed ? 'collapsed-sidebar' : ''}`}>
        <SidebarDashboard collapsed={collapsed} className="sideBar" />
        <Button variant="primary" className='h-10' onClick={() => setCollapsed(!collapsed)}>
         <Image className='h-7' src='src\assets\Menu_icon.png'/>
        </Button>
      </Container>
      <Container fluid className='p-0 col-10 justify-content-center'>
        <Figure className='imgHeader'>
          <Figure.Image src='src/assets/Admin.jpeg' />
        </Figure>
        <Container className='d-flex flex-row justify-content-center p-3'>
          <Active active={active} />
          <Pending pending={pending}/>
          <Canceled canceled={canceled}/>
        </Container>
        <RecentTable />
      </Container>
      </Container>
    </>
  );
};
