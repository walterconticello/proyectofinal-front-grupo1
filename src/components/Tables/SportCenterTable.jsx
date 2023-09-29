import {useContext, useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import { CenterContext } from "../../context/CenterContext";

const SportCenterTable = () => {
  const { complexs } = useContext(CenterContext);
 //complex is not defined.
  const numRowsToShow = 3;
  const getRandomContent = () => {
    const randomIndex = Math.floor(Math.random() * complexs.length);
    return complexs[randomIndex].content; // Suponiendo que cada objeto tiene una propiedad 'content'
  };
  const [tableData, setTableData] = useState(Array(numRowsToShow).fill(null).map(() => getRandomContent()));

  useEffect(() => {
    setTableData(Array(numRowsToShow).fill(null).map(() => getRandomContent()));
  }, []);

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Contenido</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((content, index) => (
          <tr key={index}>
            <td>{content}</td>
          </tr>
        ))};
        </tbody>
    </Table>
  );
};

export default SportCenterTable;
