import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContext";
import { AuthContext } from "../../context/AuthContext";

const SalesTable = ({ sales }) => {
  const { getProduct } = useContext(ProductContext);
  const { users } = useContext(AuthContext);
  const limitedSales = sales.slice(0, 5);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  // console.log(sales);
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {limitedSales.map((sale, index) => (
          <tr key={sale._id}>
            <td>{sale.productId.name}</td>
            <td>{sale.userId.username}</td>
            <td>{sale.quantity}</td>
            <td>{sale.totalPrice}</td>
            <td>{formatDate(sale.date)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SalesTable;
