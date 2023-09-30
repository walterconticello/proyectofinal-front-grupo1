import { Table, Button, Image } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";
import "../ProductTable/ProductTable.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { useState } from "react";
import { useEffect } from "react";
import EditProductForm from "../ProductForm/EditProductForm";

const ProductsTable = ({ products }) => {
  const { getProducts, deleteProduct, updateProducts } =
    useContext(ProductContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const MySwal = withReactContent(Swal);

  const handleEditModalShow = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setEditProduct(null);
    setShowEditModal(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="table-responsive ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="w-25">Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="">
                <td className=" d-flex  justify-content-center">
                  <Image
                    src={product.image.url}
                    alt={product.name}
                    thumbnail
                    className="img-thumbnail w-50"
                  />
                </td>
                <td className="align-middle">{product.name}</td>
                <td className="align-middle">${product.price}</td>
                <td className="align-middle">{product.stock}</td>
                <td className="align-middle">
                  <Button
                    variant="primary"
                    className="m-2"
                    onClick={() => handleEditModalShow(product)}
                  >
                    <MdEdit />
                  </Button>
                  <Button
                    variant="danger"
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
                        await deleteProduct(product._id);
                        console.log("product deleted");
                        getProducts();
                        MySwal.fire(
                          "Eliminado",
                          "El producto ha sido eliminado.",
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
      {editProduct && (
        <EditProductForm
          show={showEditModal}
          onHide={handleEditModalClose}
          product={editProduct}
          updateProducts={updateProducts}
        />
      )}
    </>
  );
};

export default ProductsTable;
