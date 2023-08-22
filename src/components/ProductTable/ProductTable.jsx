import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./ProductTable.css";
import { MdDelete } from "react-icons/md";
const ProductTable = () => {
  const { products, getProducts, deleteProduct } = useContext(ProductContext);
  const [showIdColumn, setShowIdColumn] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const handleIdColumnToggle = () => {
    setShowIdColumn(!showIdColumn);
  };

  return (
    <div className="table-container mx-auto ">
      <div className="switch-container m-2 ">
        <input
          type="checkbox"
          checked={showIdColumn}
          onChange={handleIdColumnToggle}
        />
      </div>
      <div className="table-responsive mx-auto text-center">
        <table>
          <thead>
            <tr>
              {showIdColumn && <th>ID</th>}
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
                {showIdColumn && <td>{product._id}</td>}
                <td className="w-25">{product.name}</td>
                <td>{product.price}</td>
                <td className="w-25">{product.description}</td>
                <td>{product.stock}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteProduct(product._id),
                        console.log("product deleted");
                    }}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
