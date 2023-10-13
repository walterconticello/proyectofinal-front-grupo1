import axios from "../config/axios";
import { createContext, useState } from "react";

export const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const getReservationOwner = async () => {
    try {
      const response = await axios.get(`/api/reservationOwner`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getReservationUser = async () => {
    try {
      const response = await axios.get(`/api/reservationUser`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postReservation = async (bookings) => {
    try {
      const response = axios.post("/api/reservation/", bookings);
    } catch (error) {
      console.log(error);
    }
  };

  const canceledReservation = async (id) => {
    try {
      await axios.delete(`/api/reservation/${id}`);
      const canceled = bookings.filter((booking) => booking.id !== id);
      setBookings(canceled);
    } catch (error) {
      console.log(error, "error al cancelar la reserva");
    }
  };

  const viewBooking = async (id) => {
    try {
      await axios.get(`/api/reservation/${id}`);
      const viewBooking = bookings.filter((booking) => booking.id !== id);
    } catch (error) {
      console.log(error, "error de productos");
    }
  };
  const getReservations = async () => {
    try {
      const response = await axios.get(`/api/reservation/`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        bookings,
        setBookings,
        getReservations,
        postReservation,
        canceledReservation,
        viewBooking,
        getReservationOwner,
        getReservationUser,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
