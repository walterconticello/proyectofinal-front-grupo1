import axios from "../config/axios";
import { createContext, useEffect, useState } from "react";

export const ReservationContext = createContext();

const ReservationProvider= ({ children }) => {
  const [bookings, setBookings] = useState([]);

  const getReservations = async () => {
    try {
      const response = await axios.get(`/api/reservation/`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getReservationOwner = async () => {
    try {
      const response = await axios.get(`/api/reservation/owner`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getReservationUser = async () => {
    try {
      const response = await axios.get(`/api/reservation/user`);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postReservation = async (bookings) => {
    try {
      const response = axios.post("/api/reservation/", bookings);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const canceledReservation = async (id) => {
    console.log(id, "id de context");
    try {
      await axios.delete(`/api/reservation/${id}`);
      const canceled = bookings.filter((booking) => booking.id !== id);
      setBookings(canceled);
    } catch (error) {
      console.log(error, "error al cancelar la reserva");
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
        postReservation,
        canceledReservation,
        viewBooking,
        getReservationOwner,
        getReservationUser 
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export default ReservationProvider;
