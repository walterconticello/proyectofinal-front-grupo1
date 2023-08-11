import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalCancha from '../ModalCanchas';

const CardFields = () => {

    // const id = id;

  return (
    <>
    {/* Aqui hay que agregar un bucle que sigle segun la cantidad de complejos  */}
    <div>
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="src\img\Ejemplos\1.jpg" />
      <Card.Body>
        <Card.Title>SportCenter.Name</Card.Title>
        <Card.Text>
          SportCenter.Description
        </Card.Text>
        <Button variant="primary" className="ms-1" >Ver Complejo</Button>
        {/* Aqui Abajo se le pasara el parametor Id */}
        <ModalCancha/>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default CardFields;