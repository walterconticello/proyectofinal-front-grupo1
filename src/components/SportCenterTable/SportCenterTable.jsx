import { useContext, useState, useEffect } from "react";
import { CenterContext } from "../../context/CenterContext";
import { MdDelete, MdEdit } from "react-icons/md";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ModalEditSportCenter from "../Modals/ModalEditSportCenter";
const SportCenterTable = () => {
  const {
    complexs,
    getSportCenter,
    postSportCenter,
    deleteSportCenter,
    updateSportCenter,
  } = useContext(CenterContext);
  //   console.log(complexs);
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
                <td>
                  <button
                    className="btnEdit"
                    onClick={() => handleEdit(complex)}
                  >
                    <MdEdit />
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
