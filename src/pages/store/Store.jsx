import React, { useContext } from "react";
import ProductCards from "../../components/ProductCards/ProductCards";

import { ProductContext } from "../../context/ProductContext";
const Store = () => {
  return (
    <div>
      <h1>This is store page</h1>
      <ProductCards />
    </div>
  );
};

export default Store;
