import React from "react";
import { Card } from "react-bootstrap";
import "./stats.css";
const User = ({ users }) => {
  let usuarios;

  if (users.length > 0) {
    usuarios = users.length;
  } else {
    usuarios = 0;
  }

  return (
    <div className="dashboard-stats users-stats d-flex flex-column">
      <h5>Usuarios</h5>
      <h2>{usuarios}</h2>
    </div>
  );
};

export default User;
