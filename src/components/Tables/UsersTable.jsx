import { Table } from 'react-bootstrap'

const UsersTable = ({users}) => {

  const limitedUsers = users.slice(0, 3);

  return (
    <>
    <Table striped="columns">
      <thead>
        <tr>
          <th>Username</th>
          <th>Correo Electronico</th>
          <th>Estado</th>
          <th>Es Owner</th>
        </tr>
      </thead>
      <tbody>
        {limitedUsers.map((user, index) => (
          <tr key={user._id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.state ? "Activo" : "Inactivo"}</td>
          <td>{user.isOwner ? "Es Owner" : "No es Owner"}</td>
        </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default UsersTable