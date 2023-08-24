import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const API = "http://localhost:8001/api/products/";
  useEffect(() => {
    getProducts();
  }, []);

  //GET ALL
  const getProducts = async (page = 1) => {
    try {
      const response = await axios.get(`${API}?page=${page}`);
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
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
      const form = new FormData();
      for (let key in products) {
        form.append(key, products[key]);
      }
      const res = await axios.post(API, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res, console.log(form, "product posted successfully");
    } catch (err) {
      console.log(err, "error posting product");
    }
  };

  //PUT PRODUCT
  const updateProducts = async (id, updatedProduct) => {
    try {
      const form = new FormData();
      for (let key in updatedProduct) {
        form.append(key, updatedProduct[key]);
      }

      const res = await axios.put(`${API}${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    } catch (err) {
      console.log(err, "error updating product");
      throw err;
    }
  };

  //DELETE PRODUCT

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}${id}`);
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
        totalPages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
