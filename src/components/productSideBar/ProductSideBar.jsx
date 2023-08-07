import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import Form from "react-bootstrap/Form";
import styles from "./productSideBar.css";

const ProductSideBar = ({
  selectedCategories,
  setSelectedCategories,
  isSidebarOpen,
  toggleSideBar,
}) => {
  const { products } = useContext(ProductContext);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.categories).flat())
  );

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((item) => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <h5>Filtrar</h5>
      <Form>
        {uniqueCategories.map((category) => (
          <Form.Check
            key={category}
            type="checkbox"
            label={category}
            value={category}
            className="category-field custom-checkbox p-3"
            checked={selectedCategories.includes(category)}
            onChange={handleCategoryChange}
          />
        ))}
      </Form>
    </div>
  );
};

export default ProductSideBar;
