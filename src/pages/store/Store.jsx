import React, { useContext } from "react";
import ProductCards from "../../components/ProductCards/ProductCards";

import Slider from "../../components/Slider/Slider";
const Store = () => {
  return (
    <div className="container">
      <Slider />
      <ProductCards />
    </div>
  );
};

export default Store;
