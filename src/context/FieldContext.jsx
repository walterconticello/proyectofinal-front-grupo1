import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const FieldsContext = createContext();

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);

  const getFields = async () => {
    try {
      const response = await axios.get(`/api/fields/`);
      setFields(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postField = async (fields) => {
    try {
      const form = new FormData();
      for (let key in fields) {
        if (key === 'image') {
          form.append('image', fields[key]);
        } else {
          form.append(key, fields[key]);
        }
      }
      
      const response = await axios.post(`/api/fields`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };
  const deleteField = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`/api/fields/${id}`);
      const deleteField = fields.filter((field) => field.id !== id);
      setFields(deleteField);
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const getFieldById = async (id) => {
    console.log(id);
    try {
      await axios.get(`/api/fields/${id}`);
      const viewField = fields.filter((field) => field.id !== id);
      console.log(viewField);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  const updateField = async (field) => {
    console.log(field);
    try {
      await axios.put(`/api/fields/${field.id}`);
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
        postField,
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
