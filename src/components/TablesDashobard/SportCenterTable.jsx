import { useContext } from "react";
import { Table } from "react-bootstrap";
import { CenterContext } from "../../context/CenterContext";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SportCenterForm from "../SportCenterTable/SportCenterForm";

const SportCenterTable = ({ complexs }) => {
  const { getSportCenter, deleteSportCenter } = useContext(CenterContext);

  const limitedComplexs = complexs.slice(0, 3);
  const MySwal = withReactContent(Swal);

  return (
    <>
      <SportCenterForm />
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
          {limitedComplexs.map((complex, index) => (
            <tr key={complex._id}>
              <td>{complex.name}</td>
              <td>{complex.address}</td>
              <td>{complex.phone}</td>
              <td>
                <button
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
                      console.log("sportcenter deleted");
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
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SportCenterTable;
