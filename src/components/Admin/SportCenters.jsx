import Card from 'react-bootstrap/Card';

const SportCenters = ({complexs}) => { 

  let complejos = 0;

  if (complexs && Array.isArray(complexs) && complexs.length > 0) {
    complexs = complexs.length;
  }

  return (
    <Card  bg="dark" text="white">
      <Card.Body>
        <Card.Title>Complejos </Card.Title>
        <Card.Text>
          Cantidad de complejos :{complejos}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SportCenters