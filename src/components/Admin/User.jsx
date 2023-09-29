import React from 'react'
import { Card } from 'react-bootstrap'

const User = (user) => {


  return (
    <>
    <Card style={{ width: '18rem' }} bg="success" text="white">
      <Card.Body>
        <Card.Title>Usuarios  </Card.Title>
        <Card.Text>
        
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default User