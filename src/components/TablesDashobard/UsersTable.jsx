import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UsersTable = ({ users }) => {
  const { deleteUser, getUsers } = useContext(AuthContext);

  const MySwal = withReactContent(Swal);

  return (
    <div
      className="table-container"
      style={{ maxHeight: "400px", overflowY: "auto" }}
    >
      <Table
        responsive
        className="table-responsive mx-auto text-center"
        striped="columns"
      >
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
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.state ? "Activo" : "Inactivo"}</td>
              <td>{user.isOwner ? "Es Owner" : "No es Owner"}</td>
              <td>
                <Button
                  className="p-2 mx-2 btn-warning"
                  onClick={async () => {
                    const result = await MySwal.fire({
                      title: "¿Estás seguro?",
                      text: "Esta acción eliminará el usuario de forma permanente.",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#d33",
                      cancelButtonColor: "#3085d6",
                      confirmButtonText: "Sí, eliminar",
                      cancelButtonText: "Cancelar",
                    });

                    if (result.isConfirmed) {
                      await deleteUser(user._id);
                      getUsers();
                      MySwal.fire(
                        "Eliminado",
                        "El usuario ha sido eliminado.",
                        "success"
                      );
                    }
                  }}
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
