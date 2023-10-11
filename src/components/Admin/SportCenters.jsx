import { MdOutlineStore } from "react-icons/md";

const SportCenters = ({ complexs }) => {
  let complejos = 0;

  if (complexs && complexs.length > 0) {
    complejos = complexs.length;
  }

  return (
    <div className="dashboard-stats sportcenter-stats d-flex flex-column">
      <div className="name-icon d-flex justify-content-between">
        <h5>Complejos</h5>
        <MdOutlineStore size={23} />
      </div>
      <h2>{complejos}</h2>
    </div>
  );
};

export default SportCenters;
