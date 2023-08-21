import Table from 'react-bootstrap/Table';

const Reservation = () => {
  return (
    <>
      <Table responsive overflow-auto>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Usuario</th>
            <th>Complejo</th>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover-row">
            <td>1</td>
            <td>reservation.id</td>
            <td>reservation.user</td>
            <td>reservation.Complejo</td>
            <td>reservation.cancha</td>
            <td>reservation.date</td>
            <td>reservation.Status</td>
            <td>edit</td>
            <td>delete</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Reservation;