import { Container , Figure,Button } from 'react-bootstrap'
import CardsDashboard from '../../components/Cards/CardsDashboard'
import { useState } from 'react';
import SidebarDashboard from '../../components/Sidebar/DashboardAdmin';
import './Dashboard.css';

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  console.log(collapsed);
  return (
   <>
    <Container className='d-flex flex-row mb-3'>
      <Container className='d-flex flex-row mb-2'>
      <SidebarDashboard collapsed={collapsed} className="sideBar"/>
      <Button variant="primary" className='h-10' onClick={() => setCollapsed(!collapsed)}>Collapse</Button>
      </Container>
    <Figure className='imgHeader'>
      <Figure.Image src='src\assets\Admin.jpeg'  />
    </Figure>   
    </Container>
   </> 
  )
}
