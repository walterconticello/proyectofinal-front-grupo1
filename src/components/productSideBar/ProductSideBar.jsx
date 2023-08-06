import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import Form from "react-bootstrap/Form";

const ProductSideBar = ({ selectedCategories, setSelectedCategories }) => {
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
    <div className="sidebar">
      <h4>Filtrar por Categoría</h4>
      <Form>
        {uniqueCategories.map((category) => (
          <Form.Check
            key={category}
            type="checkbox"
            label={category}
            value={category}
            checked={selectedCategories.includes(category)}
            onChange={handleCategoryChange}
          />
        ))}
      </Form>

      <h4>Filtrar por Precio</h4>
      <Form>{/* ... controles deslizantes de rango de precios ... */}</Form>
    </div>
  );
};

export default ProductSideBar;
