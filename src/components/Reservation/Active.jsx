import  { useState } from 'react';
import { Card } from 'react-bootstrap';

const Active = ({ active }) => {
  const [cantidad, setCantidad] = useState(active);

  return (
    <>
      <Card style={{ width: '12rem', height: '12rem' }} className='me-5'>
        <Card.Body>
          <Card.Title>Tipos de Reservas:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Reservas Confirmadas:</Card.Subtitle>
          <Card.Text>
            Cantidad: {cantidad}
            Estado: Confirmadas
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Active;
