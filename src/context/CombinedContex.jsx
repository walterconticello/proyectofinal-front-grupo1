import { createContext, useContext } from "react";
import FieldContext from "./FieldContext";
import CenterContext from "./CenterContext";
import ReservationContext from "./ReservationContext"

export const CombinedContext = createContext();

const CombinedProvider = ({ children }) =>{
    const Field = useContext(FieldContext);
    const SportCenter = useContext(CenterContext);
    const Reservation = useContext(ReservationContext);

    const CombinedValues = {
        Field, SportCenter , Reservation
    };

    return(

            {children}
    )
};

export default CombinedProvider