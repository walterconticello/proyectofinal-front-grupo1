import { useContext, useState, useEffect } from "react";
import { ProductContext, ProductProvider } from "../../context/ProductContext";
import "./productCards.css";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductSideBar from "../productSideBar/ProductSideBar";
import Categories from "../categories/Categories";
import {
  MdOutlineShoppingCart,
  MdOutlineRemoveShoppingCart,
} from "react-icons/md";

const ProductCards = () => {
  const { products, getProducts, totalPages } = useContext(ProductContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts(currentPage);
  }, []);

  const filteredProducts =
    selectedCategories.length === 0
      ? products
      : products.filter((product) =>
          product.categories.some((category) =>
            selectedCategories.includes(category)
          )
        );

  const addToCart = (product) => {
    if (cart.some((item) => item._id === product._id)) {
      const updatedCart = cart.filter((item) => item._id !== product._id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const isProductInCart = (product) =>
    cart.some((item) => item._id === product._id);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    getProducts(newPage);
  };
  return (
    <div className="m-5">
      <Row>
        <Col
          lg={3}
          className={`sidebarCol d-none d-lg-block ${
            !isSidebarOpen ? "d-none" : ""
          }`}
        >
          <ProductSideBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            isSidebarOpen={isSidebarOpen}
          />
        </Col>
        <Col lg={isSidebarOpen ? 9 : 12}>
          {!isSidebarOpen && (
            <Categories
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          )}
          <div className="categories-scroll-container d-flex overflow-auto">
            <Categories
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
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
                    <div className="card-image-container">
                      <Card.Img
                        src={product.image.url}
                        alt={product.name}
                        className="card-image img-fluid"
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>${product.price}</Card.Text>
                      <div className="card-buttons d-flex justify-content-between">
                        <Link
                          to={`/store/product/${product._id}`}
                          className="buy-button btn"
                        >
                          Buy now
                        </Link>
                        <Button
                          variant="primary"
                          className={`btn ${
                            isProductInCart(product) ? "added" : ""
                          }`}
                          onClick={() => addToCart(product)}
                        >
                          {isProductInCart(product) ? (
                            <MdOutlineRemoveShoppingCart />
                          ) : (
                            <MdOutlineShoppingCart />
                          )}
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <span
                  key={index}
                  className={`page-number ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCards;
