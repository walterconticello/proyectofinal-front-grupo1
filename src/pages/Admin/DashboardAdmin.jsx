import SportCenters from '../../components/Admin/SportCenters'
import Sales from '../../components/Admin/Sales'
import User from '../../components/Admin/User'
import { Col, Container, Row } from 'react-bootstrap'
import SportCenterTable from '../../components/Tables/SportCenterTable'
import ProductsTable from '../../components/Tables/ProductsTable'
import SalesTable from '../../components/Tables/SalesTable'
import UsersTable from '../../components/Tables/UsersTable'

const DashboardAdmin = () => {
 
    
  return (
    <>
    <Container fluid >
      <Row className="justify-content-md-center">
      <Col xs lg="2"><SportCenters complex={complex} /></Col>
      <Col md="auto"><Sales sales={sales}/></Col>
      <Col xs lg="2"><User users={user}/></Col>
      </Row>
    </Container>
    <Container>
      <SportCenterTable/>
      <ProductsTable/>
      <SalesTable/>
      <UsersTable/>
    </Container>
    </>
  )
}

export default DashboardAdmin;