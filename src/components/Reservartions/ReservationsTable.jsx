import Table from 'react-bootstrap/Table';
import {useContext , useEffect} from 'react'
import { ReservationContext } from '../../context/ReservationContext';
import { MdDelete} from "react-icons/md";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ReservationTable = () => {

  const MySwal = withReactContent(Swal);
  const { getReservationOwner ,bookings, canceledReservation } = useContext(ReservationContext);

  useEffect(() => {
    getReservationOwner();
  }, []);


  

  console.log(bookings);

  return (
    <>
      <Table responsive overflow-auto>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Usuario</th>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Expiracion</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index) => (
            <tr key={booking._id}>
            <td>{booking._id}</td>
            <td>{booking.IdUser}</td>
            <td>{booking.IdFields}</td>
            <td>{booking.ResevationTime}</td>
            <td>{booking.ExpirationDate}</td>
            <td><button
                    className="p-2 mx-2"
                    onClick={async () => {
                      const result = await MySwal.fire({
                        title: "¿Estás seguro?",
                        text: "Esta acción cancelara la reserva de forma permanete.",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#d33",
                        cancelButtonColor: "#3085d6",
                        confirmButtonText: "Sí, cancelar reservacion",
                        cancelButtonText: "Cancelar",
                      });

                      if (result.isConfirmed) {
                        await canceledReservation(booking._id);
                        console.log("reservacion cancelada");
                        getReservationOwner();
                        MySwal.fire(
                          "Cancelada",
                          "La reserva ha sido cancelada.",
                          "success"
                        );
                      }
                    }}
                  >
                    <MdDelete />
                  </button></td>
          </tr>
          ))};
        </tbody>
      </Table>
    </>
  );
}

export default ReservationTable;