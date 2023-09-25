import { Table ,Form } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import { FieldsContext } from "../../context/FieldContext";
import { useContext , useEffect,useState } from "react";
import Swal from 'sweetalert2';
import ModalEditField from "../Modals/ModalEditFields";

const FieldsTable = () => {
  const { fields, getFields,  deleteField } = useContext(FieldsContext);

  const [editField , setEditField] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (field) => {
    setEditField(field)
    handleShow(true)
  }; 
  

  const handleDelete = (_id) => {
    // Mostrar un cuadro de diálogo de SweetAlert para confirmar la eliminación
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteField(_id);
        Swal.fire(
          'Eliminado',
          'El elemento ha sido eliminado correctamente',
          'success'
        );
      }
    });
  };

  useEffect(() => {
    getFields();
  }, []);

  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Cancha</th>
          <th>Name</th>
          <th>Precio</th>
          <th>Tamaño</th>
          <th>Activo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) =>(
            <tr key={field._id}>
              <td><img
                    className="w-25"
                    src={field.photo.url}
                    alt={field.name}
                  /></td>
            <td>{field.name}</td>
            <td>${field.pricePerHour}</td>
            <td>{field.size}</td>
            <td><Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label={field.isActive}
      />
    </Form></td>
            <td><button onClick={() => handleEdit(field)}><MdEdit /></button><button onClick={() => handleDelete(field._id)}><MdDelete /></button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    <ModalEditField
              show={show}
              handleClose={handleClose}
              editField={editField}
            />
    </>
  );
};

export default FieldsTable;
