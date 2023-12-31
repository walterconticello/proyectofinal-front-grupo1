import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { CenterContext } from "../../context/CenterContext";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SportCenterForm from "../SportCenterTable/SportCenterForm";

const SportCenterTable = ({ complexs }) => {
  const { getSportCenter, deleteSportCenter } = useContext(CenterContext);

  const MySwal = withReactContent(Swal);

  return (
    <>
      <SportCenterForm />
      <div
        className="table-container"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <Table responsive striped="columns">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {complexs.map((complex, index) => (
              <tr key={complex._id}>
                <td>{complex.name}</td>
                <td>{complex.address}</td>
                <td>{complex.phone}</td>
                <td>
                  <Button
                    variant="danger"
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
                        await deleteSportCenter(complex._id);
                        getSportCenter();
                        MySwal.fire(
                          "Eliminado",
                          "El Complejo ha sido eliminado.",
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
    </>
  );
};

export default SportCenterTable;
