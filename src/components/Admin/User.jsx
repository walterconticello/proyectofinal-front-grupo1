import React from 'react'
import { Card } from 'react-bootstrap'

const User = ({users}) => {

  let usuarios;

if(users.length > 0){
  usuarios = users.length;
}else{
  usuarios = 0
}
  


  return (
    <>
    <Card  bg="success" text="white">
      <Card.Body>
        <Card.Title>Usuarios  </Card.Title>
        <Card.Text>
        Cantidad de usuarios :{usuarios}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default User