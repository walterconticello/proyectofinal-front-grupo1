import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export UsersContex = createContext()

const UserContex = ({children}) =>{

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


      useEffect(() => {
        getUsers()
    }, [])

    return (
        <UsersContex.Provider value={{users, getUsers , setUsers ,postUser , deleteUsers}}>
            {children}
        </UsersContex.Provider>
        
      )
}

export default UserContex;