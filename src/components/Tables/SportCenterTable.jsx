import { Table } from "react-bootstrap";

const SportCenterTable = ({complexs}) => {

  const limitedComplexs = complexs.slice(0, 3);

  return (
    <>
    <Table striped="columns">
      <thead>
      <tr>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
      </thead>
      <tbody>
        {limitedComplexs.map((complex, index) => (
          <tr key={complex._id}>
          <td>{complex.name}</td>
          <td>{complex.address}</td>
          <td>{complex.phone}</td>
        </tr>
        ))}
      </tbody>

    </Table>
    </>
  );
};

export default SportCenterTable;
