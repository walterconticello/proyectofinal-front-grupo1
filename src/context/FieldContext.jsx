import axios from "../config/axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const FieldsContext = createContext();

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [fieldsOwner, setFieldsOwner] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getFields();
  }, []);

  const getFields = async () => {
    try {
      const response = await axios.get(`/api/fields/`);
      setFields(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOwnerFields = async () => {
    try {
      const response = await axios.get(`/fieldsOwner`);
      setFieldsOwner(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postField = async (fields) => {
    try {
      const form = new FormData();
      for (let key in fields) {
        if (key === "image") {
          form.append("image", fields[key]);
        } else {
          form.append(key, fields[key]);
        }
      }

      const response = await axios.post(`/api/fields`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };
  const deleteField = async (id) => {
    try {
      await axios.delete(`/api/fields/${id}`);
      const deleteField = fields.filter((field) => field.id !== id);
      setFields(deleteField);
      getFields();
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const getFieldById = async (id) => {
    try {
      await axios.get(`/api/fields/${id}`);
      const viewField = fields.filter((field) => field.id !== id);
      setFields(viewField);
    } catch (error) {
      console.log(error, "error de fields");
    }
  };

  const updateField = async (id, field) => {
    try {
      const form = new FormData();
      for (let key in field) {
        form.append(key, field[key]);
      }

      const res = await axios.put(`/api/fields/${id}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return res.data;
    } catch (err) {
      console.log(err, "error updating field");
      throw err;
    }
  };

  const updateFieldState = (id) => {
    try {
      const res = axios.put(`/api/fields/state/${id}`);
      return res.data;
    } catch (error) {
      console.log(error, "error de fields");
    }
  };

  return (
    <FieldsContext.Provider
      value={{
        fields,
        fieldsOwner,
        loading,
        getFields,
        setFields,
        updateFieldState,
        postField,
        deleteField,
        getFieldById,
        updateField,
        getOwnerFields,
      }}
    >
      {children}
    </FieldsContext.Provider>
  );
};

export default FieldProvider;
