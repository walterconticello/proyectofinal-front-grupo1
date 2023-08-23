import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const FieldsContext = createContext()

const FieldContext = ({ children }) => {

    const [fields, setFields] = useState([]);

    const getFields = async () => {
        try {
            const response = await axios.get("http://localhost:3000/field")
            setFields(response.data);
        }catch (error) {
            console.log(error)
        }
    }

    const addField = async (fields) =>{
        try {
            const response = axios.post("http://localhost:3000/field", fields)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    }

    const deleteField = async (id) => {
        console.log(id, "id de context");
        try {
          await axios.delete(`http://localhost:3000/field/${id}`);
          const deleteField = fields.filter((field) => field.id !== id);
          setFields(deleteField);
        } catch (error) {
          console.log(error, "error al borrar cancha");
        }
      };

      const viewFieldById= async (id) => {
        console.log(id);
        try {
              await axios.get(`http://localhost:3000/field/${id}`)  
          const viewField = fields.filter((field) => field.id !== id);
          console.log(viewField);      
      }catch (error) {
        console.log(error, "error de productos");
      }
    }


      useEffect(() => {
        getFields()
    }, [])

    return (
        <FieldsContext.Provider value={{fields , getFields, setFields ,addField , deleteField, viewFieldById}}>
            {children}
        </FieldsContext.Provider>
        
      )
}

export default FieldContext;