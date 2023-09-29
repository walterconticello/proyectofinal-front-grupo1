import { Card } from 'react-bootstrap'

const Sales = ({ sales }) => {
  let ventas = 0;

  if (sales && Array.isArray(sales) && sales.length > 0) {
    ventas = sales.length;
  }

  return (
    <>
      <Card  bg="primary" text="white">
        <Card.Body>
          <Card.Title>Ventas </Card.Title>
          <Card.Text>
            Total de ventas :  {ventas}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Sales;
