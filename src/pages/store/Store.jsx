import React, { useContext } from "react";
import ProductCards from "../../components/ProductCards/ProductCards";

import { ProductContext } from "../../context/ProductContext";
const Store = () => {
  return (
    <div>
      <ProductCards />
    </div>
  );
};

export default Store;
