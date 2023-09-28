import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContex'

const User = () => {
    const { users , getUsers} = useContext(UserContext)
    console.log(users);
    getUsers();
  return (
    <div>User</div>
  )
}

export default User