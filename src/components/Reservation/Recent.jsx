import Table from 'react-bootstrap/Table';

const RecentTable = () => {
  return (
    <Table striped bordered hover responsive="sm" className='w-75'>
      <thead>
        <tr>
          <th>Reservas</th>
          <th>Fecha</th>
          <th>Cancha</th>
          <th>Complejo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Otto</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Otto</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default RecentTable