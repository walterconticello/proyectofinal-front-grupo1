import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const CenterContext = createContext();

// eslint-disable-next-line react/prop-types
const CenterProvider = ({ children }) => {
  const [complexs, setComplexs] = useState([]);

  const getSportCenter = async () => {
    try {
      const response = await axios.get(`/api/sportCenter/`);
      setComplexs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(getSportCenter);

  const postSportCenter = async (complexs) => {
    // console.log("data" + complexs);
    try {
      const form = new FormData();
      for (let key in complexs) {
        form.append(key, complexs[key]);
      }
      const response = axios.post(`/api/sportCenter/`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSportCenter = async (id) => {
    try {
      await axios.delete(`/api/sportCenter/${id}`);
      const deleteComplex = complexs.filter((complex) => complex.id !== id);
      setComplexs(deleteComplex);
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const updateSportCenter = async (id, complexs) => {
    try {
      const form = new FormData();
      for (let key in complexs) {
        form.append(key, complexs[key]);
      }
      const res = await axios.put(`/api/sportCenter/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      console.log(error, "error al editar");
    }
  };

  useEffect(() => {
    getSportCenter();
  }, []);

  return (
    <CenterContext.Provider
      value={{
        complexs,
        getSportCenter,
        postSportCenter,
        deleteSportCenter,
        updateSportCenter,
      }}
    >
      {children}
    </CenterContext.Provider>
  );
};

export default CenterProvider;
