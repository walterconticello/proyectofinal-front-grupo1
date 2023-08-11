import { Button } from 'bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardsDashboard = () => {

  
  return (
    <>
    <div className="d-flex flex-wrap justify-content-center">
    <Link to ={'/SportCenter'} className='buy-button btn m-2'>
    <Card border="success" className="ms-2 me-2" style={{ width: '16rem' }}>
        <Card.Body>
        <Card.Img variant="top" src="src\img\Complejos.png" />
        <Card.Title class="text-center pt-3">
          <h3>Complejos</h3>
        </Card.Title>
          <Card.Text>
          <strong>Complejos activos :</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      <Link to ={'./CardUsers.jsx'} className='buy-button btn m-2'>
      <Card border="success" className="ms-2 me-2" style={{ width: '16rem' }}>
        <Card.Body>
        <Card.Img variant="top" src="src\img\Canchas.png" />
        <Card.Title class="text-center pt-3">
          <h3>Canchas</h3>
        </Card.Title>
          <Card.Text>
          <strong>Canchas activas :</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
       <Link to ={'./CardUsers.jsx'} className='buy-button btn m-2'>
      <Card border="success" className="ms-2 me-2" style={{ width: '16rem' }}>
        <Card.Body>
        <Card.Img variant="top" src="src\img\Reservas.png" />
        <Card.Title class="text-center pt-3">
          <h3>Reservas</h3>
        </Card.Title>
          <Card.Text>
          <strong>Reservas activas : </strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      <Link to ={'./CardUsers.jsx'} className='buy-button btn m-2'>
      <Card border="success" className="ms-2 me-2" style={{ width: '16rem' }}>
        <Card.Body>
        <Card.Img variant="top" src="src\img\Usuarios.png" />
        <Card.Title class="text-center pt-3">
          <h3>Usuarios</h3>
        </Card.Title>
          <Card.Text>
           <strong>Usuarios activos :</strong>
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
      </div>
      </>
  )
}

export default CardsDashboard