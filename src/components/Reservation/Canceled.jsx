import { Card } from 'react-bootstrap'

export const Canceled = () => {
  return (

    <Card style={{ width: '12rem', height: '12rem' }} className='me-5'>
      <Card.Body>
        <Card.Title>Tipos de Reservas : </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Reservas Canceladas :</Card.Subtitle>
        <Card.Text>
          Cantidad : x 
          Estado : Canceladas
        </Card.Text>
      </Card.Body>
    </Card>
  )
}