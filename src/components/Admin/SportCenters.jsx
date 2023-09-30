import Card from "react-bootstrap/Card";

const SportCenters = ({ complexs }) => {
  let complejos = 0;

  if (complexs && complexs.length > 0) {
    complejos = complexs.length;
  }

  return (
    <div className="dashboard-stats sportcenter-stats d-flex flex-column">
      <h5>Complejos</h5>
      <h2>{complejos}</h2>
    </div>
  );
};

export default SportCenters;
