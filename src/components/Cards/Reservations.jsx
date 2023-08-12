import Table from 'react-bootstrap/Table';

const  Reservation = () => {

  return (
    <>
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Id </th>
            <th>Usuario</th>
            <th>Complejo</th>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  );
}

export default Reservation;