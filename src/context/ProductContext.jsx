import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const API = "http://localhost:8001/api/products/";
  useEffect(() => {
    getProducts();
  }, []);

  //GET ALL
  const getProducts = async () => {
    try {
      const response = await axios.get(API);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  // GET PRODUCT
  const getProduct = async (id) => {
    try {
      const response = await axios.get(`${API}${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  //POST PRODUCT
  const addProduct = async (products) => {
    try {
      const response = await axios.post(API, products);
      console.log(response, "product posted successfully");
    } catch (err) {
      console.log(err, "error posting product");
    }
  };

  //PUT PRODUCT
  const updateProducts = async (products) => {
    try {
      await axios.put(`${API}/${products.id}`, products);
      await getProducts();
    } catch (err) {
      console.log(err, `error updating product: ${products.id}`);
    }
  };

  //DELETE PRODUCT

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      const deleteProduct = products.filter((product) => product.id !== id);
      setProducts(deleteProduct);
    } catch (err) {
      console.log(err, "error deleting product");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        getProduct,
        selectedProduct,
        addProduct,
        updateProducts,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
