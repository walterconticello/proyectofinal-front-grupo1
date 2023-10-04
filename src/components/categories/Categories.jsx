import React, { useContext } from "react";
import "./categories.css";
import { ProductContext } from "../../context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCubes,
  faFutbol,
  faPersonRunning,
  faShirt,
  faShoePrints,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Categories = ({ selectedCategories, setSelectedCategories }) => {
  const { products } = useContext(ProductContext);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((item) => item !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.categories).flat())
  );

  const categoryIcons = {
    Balones: faFutbol,
    Calzado: faShoePrints,
    Entrenamiento: faPersonRunning,
    Ropa: faShirt,
    Accesorios: faCubes,
  };

  return (
    <div className="categories-container d-flex  justify-content-center">
      {uniqueCategories.map((category) => (
        <Button
          key={category}
          type="button"
          className={`category-button p-2 mb-4 mx-2 d-flex align-items-center ${
            selectedCategories.includes(category) ? "active" : ""
          }`}
          onClick={() => handleCategoryChange({ target: { value: category } })}
          style={{
            backgroundColor: selectedCategories.includes(category)
              ? "#71B641"
              : "transparent",
            color: selectedCategories.includes(category)
              ? "#ffffff"
              : "#000000",
          }}
        >
          <FontAwesomeIcon
            icon={categoryIcons[category]}
            className="category-icon"
            style={{ width: "1em", height: "1em", marginRight: "0.5rem" }}
          />
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Categories;
