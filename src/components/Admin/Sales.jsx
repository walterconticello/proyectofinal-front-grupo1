import { Card } from "react-bootstrap";
import { MdAttachMoney } from "react-icons/md";

const Sales = ({ sales }) => {
  let totalVentas = 0;

  if (sales && Array.isArray(sales) && sales.length > 0) {
    totalVentas = sales.reduce((total, sale) => total + sale.totalPrice, 0);
  }

  return (
    <>
      <div className="dashboard-stats sales-stats d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h5>Ventas</h5>
          <MdAttachMoney size={23} />
        </div>
        <h2>${totalVentas}</h2>
      </div>
    </>
  );
};

export default Sales;
