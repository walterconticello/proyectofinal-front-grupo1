import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UsersContext = createContext()

const UserContext = ({ children }) => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/user")
            setUsers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const postUser = async (users) =>{
        try {
            const response = axios.post("http://localhost:3000/user", users)
            console.log(response)
        }catch (error){
            console.log(error)
        }
    }

    const deleteUsers = async (id) => {
        console.log(id, "id de context");
        try {
          await axios.delete(`http://localhost:3000/user/${id}`);
          const deleteUser = users.filter((user) => user.id !== id);
          setUsers(deleteUser);
        } catch (error) {
          console.log(error, "error de productos");
        }
      };

      const viewProfileId= async (id) => {
        console.log(id);
        try {
              await axios.get(`http://localhost:3000/user/${id}`)  
          const viewUser = users.filter((user) => user.id !== id);
          console.log(viewUser);      
      }catch (error) {
        console.log(error, "error de productos");
      }
    }


      useEffect(() => {
        getUsers()
    }, [])

    return (
        <UsersContext.Provider value={{users , getUsers , setUsers ,postUser , deleteUsers , viewProfileId}}>
            {children}
        </UsersContext.Provider>
        
      )
}

export default UserContext;