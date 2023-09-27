import { Container, Figure, Button, Image, Row, Col } from "react-bootstrap";
import ProductTable from "../../components/ProductTable/ProductTable";
import { useState } from "react";
import SidebarDashboard from "../../components/Sidebar/SideBar";
import "./Dashboard.css";

import SportCenterTable from "../../components/SportCenterTable/SportCenterTable";

export const Dashboard = () => {
  return (
    <>
      <Container fluid className="d-flex flex-row p-0">
        <Container fluid className="p-0 col-10 justify-content-center">
          <Figure className="imgHeader">
            <Figure.Image src="src/assets/Admin.jpeg" />
          </Figure>
          <Row>
            <Col md={4} sm={12}>
              <SidebarDashboard className="sideBarDashboard" />
            </Col>
            <Col md={8} sm={12}>
              <SportCenterTable />
              <hr />
              <ProductTable />
            </Col>
          </Row>

          {/* <RecentTable /> */}
        </Container>
      </Container>
    </>
  );
};
