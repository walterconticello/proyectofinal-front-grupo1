import { Table, Form } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { FieldsContext } from "../../context/FieldContext";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import ModalEditField from "../Modals/ModalEditFields";

const FieldsTable = ({ center }) => {
  const {
    centerFields,
    getFieldsBySportCenterId,
    deleteField,
    updateFieldState,
  } = useContext(FieldsContext);
  const [editField, setEditField] = useState(null);

  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (center) {
      getFieldsBySportCenterId(center._id);
    }
  }, [center.id]);

  const handleEdit = (field) => {
    setEditField(field);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setEditField(null);
    setShowEditModal(false);
  };

  const handleDelete = (_id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteField(_id);
        Swal.fire(
          "Eliminado",
          "El elemento ha sido eliminado correctamente",
          "success"
        );
      }
    });
  };

  const handleState = (_id, isActive) => {
    const stateText = isActive ? "desactivar" : "activar";

    Swal.fire({
      title: `¿Estás seguro que deseas ${stateText} el elemento?`,
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: `Sí, ${stateText}`,
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        updateFieldState(_id);
        Swal.fire(
          `${stateText}`,
          ` El elemento ha sido ${stateText} correctamente`,
          "success"
        );
      }
    });
  };

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Cancha</th>
            <th>Name</th>
            <th>Horario de apertura</th>
            <th>Horario de cierre</th>
            <th>Precio por hora</th>
            <th>Tamaño</th>
            <th>Activo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {centerFields.map((field) => (
            <tr key={field._id}>
              <td className="w-0">
                <img className="w-100" src={field.photo.url} alt={field.name} />
              </td>
              <td>{field.name}</td>
              <td>{field.openHour} hs</td>
              <td>{field.closeHour} hs</td>
              <td>${field.pricePerHour}</td>
              <td>{field.size}</td>
              <td>
                <Form onClick={() => handleState(field._id, field.isActive)}>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={field.isActive ? "Activo" : "Inactivo"}
                  />
                </Form>
              </td>
              <td>
                <button onClick={() => handleEdit(field)}>
                  <MdEdit />
                </button>
                <button onClick={() => handleDelete(field._id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showEditModal && (
        <ModalEditField
          show={showEditModal}
          handleClose={handleEditModalClose}
          editField={editField}
        />
      )}
    </>
  );
};

export default FieldsTable;
