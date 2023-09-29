import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CenterContext = createContext();

// eslint-disable-next-line react/prop-types
const CenterProvider = ({ children }) => {
  const [complexs, setComplexs] = useState([]);
  const [owner, setOwner] = useState([]);

  const getSportCenter = async () => {
    try {
      const response = await axios.get(`/api/sportCenter/`);
      setComplexs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSportCenterOwner = async (id) => {
    try {
      const response = await axios.get(`/api/sportCenter/owner/${id}`);
      setOwner(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const postSportCenter = async (complexs) => {
    try {
      let form = new FormData();
      let subObject = {};
      for (let key in complexs) {
        if (key == "photo") {
          form.append(key, complexs[key]);
        } else {
          subObject[key] = complexs[key];
        }
      }
      form.append("data", JSON.stringify(subObject));
      const response = await axios.post(`/api/sportCenter`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
    } catch (error) {
      console.log(error, "error posting sportCenter");
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
      let form = new FormData();
      let subObject = {};

      for (let key in complexs) {
        if (key === "photo") {
          form.append(key, complexs[key]);
        } else {
          subObject[key] = complexs[key];
        }
      }

      form.append("data", JSON.stringify(subObject));

      const response = await axios.put(`/api/sportCenter/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response;
    } catch (error) {
      console.error("Error updating sport complex:", error);
    }
  };

  useEffect(() => {
    getSportCenter();
  }, []);

  return (
    <CenterContext.Provider
      value={{
        complexs,
        owner,
        getSportCenter,
        postSportCenter,
        deleteSportCenter,
        updateSportCenter,
        getSportCenterOwner,
      }}
    >
      {children}
    </CenterContext.Provider>
  );
};

export default CenterProvider;
