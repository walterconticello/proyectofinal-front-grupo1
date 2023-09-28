import { createContext,  useState } from "react";
import axios from "../config/axios";

export const SalesContext = createContext();

const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    try {
      const response = await axios.get("/api/sales");
      setSales(response.data);
    } catch (error) {
      console.error("Error fetching sales:", error);
    }
  };

  const getSaleById = async (id) => {
    try {
      const response = await axios.get(`/api/sales/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sale:", error);
      return null;
    }
  };

  const addSale = async (saleData) => {
    try {
      const response = await axios.post("/api/sales", saleData);
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


export default SalesProvider;
