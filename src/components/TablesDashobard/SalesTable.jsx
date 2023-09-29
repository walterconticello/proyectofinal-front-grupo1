import React from 'react'
import { Table } from 'react-bootstrap'

const SalesTable = ({sales}) => {

  const limitedSales = sales.slice(0, 3);

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Id del producto</th>
          <th>User</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
    {limitedSales.map((sale , index) => (
      <tr key={sale._id}>
      <td>{sale.productId}</td>
      <td>{sale.userId}</td>
      <td>{sale.quantity}</td>
      <td>{sale.totalPrice}</td>
      <td>{sale.date}</td>
    </tr>
    ))}
        
      </tbody>
    </Table>
  )
}

export default SalesTable