import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FieldsContext = createContext()

const FieldProvider = ({ children }) => {
  const [fields, setFields] = useState([]); 
    const getFields = async () => {
        try {
            const response = await axios.get("http://localhost:5500/api/fields")
            setFields(response.data);
        }catch (error) {
            console.log(error)
        }
    }


    const addField = async (fields) =>{
        try {
            const response = axios.post("http://localhost:5500/api/fields", fields)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    };
  

    const deleteField = async (id) => {
        console.log(id, "id de context");
        try {
          await axios.delete(`http://localhost:5500/api/fields/${id}`);
          const deleteField = fields.filter((field) => field.id !== id);
          setFields(deleteField);
        } catch (error) {
          console.log(error, "error al borrar cancha");
        }
      };

      const getFieldById = async (id) => {
        console.log(id);
        try {
              await axios.get(`http://localhost:5500/fields/${id}`)  
          const viewField = fields.filter((field) => field.id !== id);
          console.log(viewField);      
      }catch (error) {
        console.log(error, "error de productos");
      }
    }


    const updateField = async ( field ) => {
      console.log( field );
      try{
          await axios.put(`http://localhost:5500/fields/${field.id}`);
      } catch(error){
          console.log(error, "error al editar");
      }
    }


  useEffect(() => {
    getFields();
  }, []);

    return (
        <FieldsContext.Provider value={{fields , getFields, setFields ,addField , deleteField, getFieldById , updateField}}>
            {children}
        </FieldsContext.Provider>
        
      )
}

export default FieldProvider;
