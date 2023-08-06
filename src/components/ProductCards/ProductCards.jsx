import React, { useContext, useState } from "react";
import { ProductContext, ProductProvider } from "../../context/ProductContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import ProductSideBar from "../productSideBar/ProductSideBar";
import styles from "./productCards.css";
const ProductCards = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategories, setSelectedCategories] = useState([]); // Estado inicial de las categorías seleccionadas

  // Filtrar productos por categorías seleccionadas
  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          product.categories.some((category) =>
            selectedCategories.includes(category)
          )
        );

  return (
    <div className="m-5">
      <h1 className="mb-4">This is the card list</h1>
      <Row>
        <Col md={3} className="sidebarCol">
          <ProductProvider>
            <ProductSideBar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </ProductProvider>
        </Col>

        <Col md={9}>
          <Row className="justify-content-center">
            {filteredProducts.length === 0 ? (
              <Col xs={12} className="text-center mt-4">
                <p>No hay productos disponibles.</p>
              </Col>
            ) : (
              filteredProducts.map((product) => (
                <Col
                  key={product._id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4"
                >
                  <Card className="h-100">
                    {/* <Card.Img variant="top" src={product.image} alt={product.name} /> */}
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Button className="buy-button">Add to Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCards;
