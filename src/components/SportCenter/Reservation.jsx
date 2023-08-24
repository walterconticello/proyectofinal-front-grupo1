import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import Swal from 'sweetalert2'

const Reservation = ({show, onHide, field}) => {
    
    const [startDate, setStartDate] = useState(null);
    const [reservations, setReservations] = useState([]);
    const [errorFecha, setErrorFecha] = useState({error: false,message: ""});
    const [clicked, setClicked] = useState(false);

    const user = {
        username: "diego_vacapaz",
        userId: "unadcfgaigbfgasd"
    }
    
    const addMonth = (month, offset) => {
        if(month + offset <= 11){
            return month + offset;
        }
        return (month + offset - 11) - 1;
    }

    const addDay = (day, month,offset) => {
        switch(month){
            case 0: //31 days
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                if(day + offset <= 31){
                    return day + offset;
                }
                return (day + offset - 31);
                break;
            case 3: //30 days
            case 5:
            case 8:
            case 10:
                if(day + offset <= 30){
                    return day + offset;
                }
                return (day + offset - 30);
                break;
            case 1:
                if(day + offset <= 28){
                    return day + offset;
                }
                return (day + offset - 28);
                break;
            default:
                break;
        }
        
        if(day + offset <=23){
            return day + offset;
        }
        return (day + offset - 23) - 1;
    }

    const URL = import.meta.env.VITE_DB;
    const endDate = new Date(new Date().getFullYear(), addMonth(new Date().getMonth(), 2), new Date().getDate());
    const startTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),field.openHour);
    const endTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),field.closeHour - 1);

    const fetchReservation = async () => { //Esto deberia filtrar por id de field, pero el dbjson no puedo por eso lo filtro en el try-catch
        try {
            const response = await fetch(`${URL}reservations`);
            const data = await response.json();
            const fieldReservations = data.filter((reservation) => reservation.IdField === field._id);
            setReservations(fieldReservations);
        }
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#71B641',
                text: 'Algo salió mal', //Poner el mensaje del backend
            });
        }
    }

    const fetchPostReservation = async (reservation) => {
        try{
            const response = await fetch(`${URL}reservations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reservation),
            });

            const updateResponse = await  fetch(`${URL}reservations`);
            const data = await updateResponse.json();
            setReservations([...data]);
            Swal.fire({
                icon: 'success',
                title: 'Genial!',
                confirmButtonColor: '#71B641',
                text: 'Tu reserva se guardo correctamente!', //Poner el mensaje del backend
            });
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#71B641',
                text: 'Algo salió mal', //Poner el mensaje del backend
            });
        }
    }

    const filterReservedHours = () => {
        if(startDate){
            const todayReservations = reservations.filter((reservation) => {
                let date = Date.parse(reservation.ReservationTime)
                date = new Date(date);
                return (date.getFullYear()===startDate.getFullYear() &&  date.getMonth()===startDate.getMonth() && date.getDate()===startDate.getDate());
            });
            const reservatedHours = [];
            for(let i = 0; i < todayReservations.length; i++) {
                reservatedHours.push(new Date(Date.parse(todayReservations[i].ReservationTime)));
            }
            return reservatedHours;
        }
        return [];
    }

    //Puedo hacer un filtro de dia cuando se completa todas las horas

    useEffect(() => {
        fetchReservation();
    },[]);

    const validacionFecha = () => {
        if(!startDate) {
            return {
                error: true,
                message: "Requerido"
            };
        }

        if(startDate.getFullYear < startTime.getFullYear() ||(startDate.getFullYear < startTime.getFullYear() && startDate.getMonth() < startTime.getMonth()) || (startDate.getFullYear < startTime.getFullYear() && startDate.getMonth() < startTime.getMonth()&&startDate.getDate() < startTime.getDate()) || startDate.getHours() < startTime.getHours()){
            return {
                error: true,
                message: "Elija una fecha posterior"
            }
        };
        if(startDate.getFullYear > endDate.getFullYear() || (startDate.getFullYear > endDate.getFullYear() && startDate.getMonth() > endDate.getMonth()) || (startDate.getFullYear > endDate.getFullYear() && startDate.getMonth() > endDate.getMonth() && startDate.getDate() > endDate.getDate) || startDate.getHours() > endTime.getHours()){
            return {
                error: true,
                message: "Elija una fecha anterior"
            }
        }
        if(startTime.getHours()>field.closeHour || startTime.getHours()<field.openHour){
            return {
                error: true,
                message: "Elija una hora donde la cancha esté abierta"
            }
        }

        if(filterReservedHours()){
            const colission = filterReservedHours().find((reservated)=> startDate.getHours()===reservated.getHours());
            if(colission) {
                return {
                    error: true,
                    message: "Elija una hora donde la cancha esté libre"
                }
            }
        }

        return {
            error: false,
            message: ""
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!errorFecha.error){
            fetchPostReservation({
                IdUser: user.userId,
                IdSportCenter: field.IdSportCenter,
                IdField: field._id,
                ReservationTime: startDate,
            });
            onHide();
            setStartDate(null);
            setClicked(false);
        }
    }
    
    useEffect(()=>{
        setErrorFecha(validacionFecha);
    },[startDate]);

    return (
        <>
            <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Reserva la {field.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <h3 className="text-muted mb-3">Usuario: {user.username}</h3>
                        <div className="d-flex flex-column flex-md-row my-3">
                            <Form.Group className="d-flex flex-column w-100">
                                <Form.Label className="fw-medium">Seleccione una fecha: </Form.Label>  {/*FALTA EL LIMITE INFERIOR DE HS Y FALTA EL EXCLUDE POR RESERVAS HECHAS*/}
                                <DatePicker showIcon showTimeSelect minDate={(new Date()).setDate(addDay((new Date()).getDate(),(new Date()).getMonth(),1))} maxDate={endDate} excludeTimes={filterReservedHours()} timeCaption="Hora" minTime={startTime} maxTime={endTime} placeholderText="Click aquí" timeFormat="HH:mm" timeIntervals={60} dateFormat="dd/MM/yyyy h aa" selected={startDate} onChange={(date) => {setStartDate(date); setClicked(true)}} required className={`comment-border ${clsx(
                                    "form-control", 
                                    {
                                        "is-invalid": errorFecha.error && clicked,
                                    },
                                    {
                                        "is-valid": !errorFecha.error && clicked,
                                    }
                                )}`}/>
                                {errorFecha.error && clicked &&(
                                    <div className="text-danger fw-bolder my-2">
                                        <span rol="alert">{errorFecha.message}</span>
                                    </div>
                                )}
                            </Form.Group> {/*filterDate={} filterTime={filterReservedHours} excludeDates={[]} excludeTimes={[]}*/ }
                        </div>
                        <Form.Group className="d-flex flex-column flex-md-row justify-content-md-end gap-3">
                            <Button variant="outline-danger" className="btn-reservation" type="button"  onClick={()=>{onHide(); setStartDate(null); setClicked(false)}}>Cerrar</Button>
                            <Button variant="outline-success" className="btn-reservation" type="submit">Reservar</Button>
                        </Form.Group>
                    </Form>
                    <p className="text-muted my-2">Podes alquilar tu cancha entre 1 o 60 dias antes **</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Reservation;