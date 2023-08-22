import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const SportCenterContext = createContext()

const CenterContext = ({ children }) => {

    const [complexs, setComplexs] = useState([]);

    const getSportCenter= async () => {
        try {
            const response = await axios.get("http://localhost:5173/SportCenter")
            setComplexs(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const postSportCenter = async (complexs) =>{
        try {
            const response = axios.post("http://localhost:5173/SportCenter", complexs)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    }

    const deleteSportCenter = async (id) => {
        console.log(id, "id de context");
        try {
          await axios.delete(`http://localhost:5173/SportCenter/${id}`);
          const deleteComplex = complexs.filter((complex) => complex.id !== id);
          setComplexs(deleteComplex);
        } catch (error) {
          console.log(error, "error al borrar cancha");
        }
      };

      const updateSportCenter = async (SportCenter) => {
        try{
            await axios.put(`http://localhost:5173/SportCenter/${SportCenter.id}`);
        } catch(error){
            console.log(error, "error al borrar cancha");
        }
      }

      useEffect(() => {
        getSportCenter()
    }, [])

    return (
        <SportCenterContext.Provider value={{complexs , getSportCenter, setComplexs ,postSportCenter , deleteSportCenter , updateSportCenter}}>
            {children}
        </SportCenterContext.Provider>
      )
}

export default CenterContext;