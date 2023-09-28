import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const SportCenters = () => { 
    const [complejos , setComplejos] = useState();
    console.log(complejos);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Complejos </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default SportCenters