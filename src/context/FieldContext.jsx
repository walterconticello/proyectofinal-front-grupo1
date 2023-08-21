import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FieldContext = createContext();

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const getFields = async () => {
    try {
      const response = await axios.get("http://localhost:3000/fields");
      setFields(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postFields = async (fields) => {
    try {
      const response = axios.post("http://localhost:3000/fields", fields);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteField = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`http://localhost:3000/fields/${id}`);
      const deleteField = fields.filter((field) => field.id !== id);
      setFields(deleteField);
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const viewFieldById = async (id) => {
    console.log(id);
    try {
      await axios.get(`http://localhost:3000/fields/${id}`);
      const viewField = fields.filter((field) => field.id !== id);
      console.log(viewUser);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  useEffect(() => {
    getFields();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        fields,
        getFields,
        setFields,
        postFields,
        deleteField,
        viewFieldById,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default FieldProvider;
