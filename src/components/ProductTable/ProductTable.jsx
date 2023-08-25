import  { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductTable.css";
import { MdDelete, MdEdit } from "react-icons/md";
import ProductForm from "../ProductForm/ProductForm";
import EditProductForm from "../ProductForm/EditProductForm";
import Swal from "sweetalert2";

const ProductTable = () => {
  const { products, getProducts, deleteProduct, updateProducts } =
    useContext(ProductContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);
  const MySwal = withReactContent(Swal);

  const handleEditModalShow = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setEditProduct(null);
    setShowEditModal(false);
  };

  return (
    <div className="table-container mx-auto ">
      <div className="switch-container align-items-center">
        <ProductForm />
      </div>
      <div className="table-responsive mx-auto text-center">
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    className="w-50"
                    src={product.image.url}
                    alt={product.name}
                  />
                </td>
                <td className="w-25">{product.name}</td>
                <td>${product.price}</td>
                <td className="w-25">{product.description}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    className="btnEdit m-2"
                    onClick={() => handleEditModalShow(product)}
                  >
                    <MdEdit />
                  </button>
                  <button
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
                    className="m-2"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editProduct && (
        <EditProductForm
          show={showEditModal}
          onHide={handleEditModalClose}
          product={editProduct}
          updateProducts={updateProducts}
        />
      )}
    </div>
  );
};

export default ProductTable;
