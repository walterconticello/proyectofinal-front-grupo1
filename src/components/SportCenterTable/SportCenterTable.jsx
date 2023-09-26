import { useContext, useState, useEffect } from "react";
import { CenterContext } from "../../context/CenterContext";
import { MdDelete, MdEdit } from "react-icons/md";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ModalEditSportCenter from "../Modals/ModalEditSportCenter";
import SportCenterForm from "./SportCenterForm";
const SportCenterTable = () => {
  const MySwal = withReactContent(Swal);

  const {
    complexs,
    getSportCenter,
    postSportCenter,
    deleteSportCenter,
    updateSportCenter,
  } = useContext(CenterContext);
  const [editComplex, setEditComplex] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleEdit = (complex) => {
    setEditComplex(complex);
    setShow(true);
  };

  useEffect(() => {
    getSportCenter();
  }, []);
  return (
    <div className="table-container">
      <SportCenterForm />
      <div className="table-responsive mx-auto text-center">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              {/* <th>Dueño</th> */}
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
                <td className="">
                  <button
                    className="btnEdit p-2 mx-2"
                    onClick={() => handleEdit(complex)}
                  >
                    <MdEdit />
                  </button>
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
            {show && (
              <ModalEditSportCenter
                show={show}
                handleClose={handleClose}
                editComplex={editComplex}
              />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SportCenterTable;
