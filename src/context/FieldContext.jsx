import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const FieldsContext = createContext();

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [loading , setIsLoading] = useState(true)

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

  const updateField = async (id , field) => {

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
      console.log(err, "error updating product");
      throw err;
    }
    // try {
    //   await axios.put(`/api/fields/${field.id}`);
    // } catch (error) {
    //   console.log(error, "error al editar");
    // }
  };
  

  return (
    <FieldsContext.Provider
      value={{
        fields,
        loading,
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
