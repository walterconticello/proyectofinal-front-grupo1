import { useContext } from 'react';
import { Table } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext';
import { MdDelete} from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UsersTable = ({users}) => {

  const { deleteUser , getUsers } = useContext(AuthContext);

  const MySwal = withReactContent(Swal);
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
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {limitedUsers.map((user, index) => (
          <tr key={user._id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.state ? "Activo" : "Inactivo"}</td>
          <td>{user.isOwner ? "Es Owner" : "No es Owner"}</td>
          <td><button
                    className="p-2 mx-2"
                    onClick={async () => {
                      const result = await MySwal.fire({
                        title: "¿Estás seguro?",
                        text: "Esta acción eliminará el producto de forma permanente.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#d33",
                        cancelButtonColor: "#3085d6",
                        confirmButtonText: "Sí, eliminar",
                        cancelButtonText: "Cancelar",
                      });

                      if (result.isConfirmed) {
                        await deleteUser(user._id);
                        console.log("sportcenter deleted");
                        getUsers();
                        MySwal.fire(
                          "Eliminado",
                          "El Complejo ha sido eliminado.",
                          "success"
                        );
                      }
                    }}
                  >
                    <MdDelete />
                  </button></td>
        </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}

export default UsersTable