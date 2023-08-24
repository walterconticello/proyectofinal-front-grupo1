import React , { useContext, useState , useEffect  } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalEditField from "../Modals/ModalEditFields";
import { Image } from "react-bootstrap";
import { FieldsContext } from "../../context/FieldContext"
import Swal from 'sweetalert2';
import "./Card.css";

const CardField = () => {

  const { fields , deleteField , loading } = useContext(FieldsContext);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [editField , setEditField] = useState();
 
  const [show, setShow] = useState(false);

  console.log(fields)

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
    if (!loading) {
      setDataLoaded(true);
    }
  }, [loading]);


  useEffect(() => {
    if (!loading) {
      setDataLoaded(true);
    }
  }, [loading]);

  return (
    <>
    <div  className="d-flex flex-wrap justify-content-between gap-3 m-3 container-fluid">
       {fields === undefined ? "No hay canchas" : fields.map((field) => (
        <React.Fragment key={field._id}>
              <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="src\img\Ejemplos\2.jpg" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title >{field.name}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <Button className="buttonCardDashboar" size="sm">
                      Ver Cancha
                    </Button>
                    <Button variant="" id="edit" onClick={() => handleEdit(field)}>
                      <Image src="src/assets/Editar.png" rounded fluid />
                    </Button>
                    <Button variant="" id="edit" onClick={() => handleDelete(field._id)}>
                      <Image src="src/assets/Delete.png" rounded fluid />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            <ModalEditField
              show={show}
              handleClose={handleClose}
              editField={editField}
            />
          </React.Fragment>
        ))};
      </div>
    </>
  );
};

export default CardField;
