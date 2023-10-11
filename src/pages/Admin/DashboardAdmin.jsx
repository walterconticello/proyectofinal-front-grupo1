import SportCenters from "../../components/Admin/SportCenters";
import Sales from "../../components/Admin/Sales";
import User from "../../components/Admin/User";
import { Col, Container, Row } from "react-bootstrap";
import SportCenterTable from "../../components/TablesDashobard/SportCenterTable";
import ProductsTable from "../../components/TablesDashobard/ProductsTable";
import SalesTable from "../../components/TablesDashobard/SalesTable";
import UsersTable from "../../components/TablesDashobard/UsersTable";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CenterContext } from "../../context/CenterContext";
import { ProductContext } from "../../context/ProductContext";
import { SalesContext } from "../../context/SalesContext";
import "../../components/ProductForm/productForm.css";
const DashboardAdmin = () => {
  const { users, getUsers } = useContext(AuthContext);
  const { complexs, getSportCenter, deleteSportCenter } =
    useContext(CenterContext);
  const { products, getProducts } = useContext(ProductContext);
  const { sales, getSales } = useContext(SalesContext);
  useEffect(() => {
    getUsers();
    getSales();
    getSportCenter();
    getProducts();
  }, []);
  return (
    <>
      <Container fluid>
        <Row className="d-flex justify-content-center align-itmes-center my-5 mx-1">
          <Col xs lg="2" md="3">
            {complexs && <SportCenters complexs={complexs} />}
          </Col>
          <Col lg="2" md="3">
            {sales && <Sales sales={sales} />}
          </Col>
          <Col lg="2" md="3">
            {users && <User users={users} />}
          </Col>
        </Row>
      </Container>
      <Container>
        <h2 className="text-center my-4">Complejos</h2>
        {complexs && <SportCenterTable complexs={complexs} />}
        <hr />
        <h2 className="text-center my-4">Productos</h2>
        {products && <ProductsTable products={products} />}
        <hr />
        <h2 className="text-center my-4">Ventas</h2>
        {sales && <SalesTable sales={sales} />}
        <hr />
        <h2 className="text-center my-4">Usuarios</h2>
        {users && <UsersTable users={users} />}
        <hr />
      </Container>
    </>
  );
};

export default DashboardAdmin;
