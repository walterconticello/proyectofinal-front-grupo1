import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductCards = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="m-5">
      {" "}
      {/* Agregamos un margen a la derecha del contenedor principal */}
      <h1 className="mb-4">This is the card list</h1>
      <Row>
        {/* Sidebar con filtros (izquierda) */}
        <Col md={3}>
          {/* Agrega aquí el contenido de tu sidebar */}
          <button type="button" className="btn btn-primary mb-2">
            Filter 1
          </button>
          <button type="button" className="btn btn-primary mb-2">
            Filter 2
          </button>
          {/* ... Agrega aquí más filtros si es necesario */}
        </Col>

        {/* Espacio para las cards (derecha) */}
        <Col md={9}>
          <Row className="justify-content-center">
            {products.length === 0 ? (
              <Col xs={12} className="text-center mt-4">
                <p>No hay productos disponibles.</p>
              </Col>
            ) : (
              products.map((product) => (
                <Col
                  key={product._id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  className="mb-4"
                >
                  <Card className="h-100">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Button variant="primary">Add to Cart</Button>
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
