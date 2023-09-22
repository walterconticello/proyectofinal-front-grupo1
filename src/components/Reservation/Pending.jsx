import { Card } from 'react-bootstrap'

export const Pending = () => {
  return (

    <Card style={{ width: '12rem', height: '12rem' }} className='me-5'>
      <Card.Body>
        <Card.Title>Tipos de Reservas : </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Reservas Pendientes :</Card.Subtitle>
        <Card.Text>
          Cantidad : x 
          Estado : Pendientes
        </Card.Text>
      </Card.Body>
    </Card>
  )
}