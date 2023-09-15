import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const ReservationContext = createContext();

const ReserveContext = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const getReservations = async () => {
    try {
      const response = await axios.get(`/api/reservation/`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postReseration = async (bookings) => {
    try {
      const response = axios.post("/api/reservation/", bookings);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteResevation = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`/api/reservation/${id}`);
      const deleteResevation = bookings.filter((booking) => booking.id !== id);
      setBookings(deleteResevation);
    } catch (error) {
      console.log(error, "error al borrar cancha");
    }
  };

  const viewBooking = async (id) => {
    console.log(id);
    try {
      await axios.get(`/api/reservation/${id}`);
      const viewBooking = bookings.filter((booking) => booking.id !== id);
      console.log(viewBooking);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <ReservationContext.Provider
      value={{
        bookings,
        setBookings,
        getReservations,
        postReseration,
        deleteResevation,
        viewBooking,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export default ReserveContext;
