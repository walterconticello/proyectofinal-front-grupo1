import SportCenters from '../../components/Admin/SportCenters';
import Sales from '../../components/Admin/Sales';
import User from '../../components/Admin/User';
import { Col, Container, Row } from 'react-bootstrap';
import SportCenterTable from '../../components/Tables/SportCenterTable';
import ProductsTable from '../../components/Tables/ProductsTable';
import SalesTable from '../../components/Tables/SalesTable';
import UsersTable from '../../components/Tables/UsersTable';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CenterContext } from '../../context/CenterContext';
import { ProductContext } from '../../context/ProductContext';
import { SalesContext } from '../../context/SalesContext';

const DashboardAdmin = () => {
  const { users, getUsers } = useContext(AuthContext);
  const { complexs, getSportCenter } = useContext(CenterContext);
  const { products, getProducts } = useContext(ProductContext);
  const { sales, getSales } = useContext(SalesContext);

  useEffect(() => {
    getUsers();
    getSportCenter();
    getProducts();
    getSales();
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col xs lg="2">{complexs && <SportCenters complexs={complexs} />}</Col>
          <Col md="auto">{sales &&  <Sales sales={sales} />}</Col>
          <Col xs lg="2">{users &&  <User users={users} />}</Col>
        </Row>
      </Container>
      <Container>
        {complexs && <SportCenterTable complexs={complexs} />}
        {products &&  <ProductsTable products={products} />}
        {sales &&  <SalesTable sales={sales} /> }
        {users && <UsersTable users={users} />}
      </Container>
    </>
  );
};

export default DashboardAdmin;
