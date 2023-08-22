import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const SalesContext = createContext();

const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const API_URL = "http://localhost:8001/api/sales";

  const getSales = async () => {
    try {
      const response = await axios.get(API_URL);
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  const getSaleById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sale:", error);
      return null;
    }
  };

  const addSale = async (saleData) => {
    try {
      const response = await axios.post(API_URL, saleData);
      setSales([...sales, response.data]);
    } catch (error) {
      console.error("Error creating sale:", error);
    }
  };

  return (
    <SalesContext.Provider value={{ sales, getSales, getSaleById, addSale }}>
      {children}
    </SalesContext.Provider>
  );
};

const useSalesContext = () => {
  return useContext(SalesContext);
};

export { SalesProvider, useSalesContext };
