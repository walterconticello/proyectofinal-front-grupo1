import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FieldsContext = createContext();

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const API = "http://localhost:5500/api/fields/";
  const getFields = async () => {
    try {
      const response = await axios.get(`${API}`);
      setFields(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addField = async (fields) => {
    try {
      const response = axios.post(`${API}`, fields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteField = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`${API}${id}`);
      const deleteField = fields.filter((field) => field.id !== id);
      setFields(deleteField);
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const getFieldById = async (id) => {
    console.log(id);
    try {
      await axios.get(`${API}${id}`);
      const viewField = fields.filter((field) => field.id !== id);
      console.log(viewField);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  const updateField = async (field) => {
    console.log(field);
    try {
      await axios.put(`${API}${field.id}`);
    } catch (error) {
      console.log(error, "error al editar");
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  return (
    <FieldsContext.Provider
      value={{
        fields,
        getFields,
        setFields,
        addField,
        deleteField,
        getFieldById,
        updateField,
      }}
    >
      {children}
    </FieldsContext.Provider>
  );
};

export default FieldProvider;
