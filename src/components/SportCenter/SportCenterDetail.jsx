import { Button, Col, Container, Row } from "react-bootstrap";
import Service from "./Map/ServicePin/Service";
import "./SportCenterDetail.css";
import MapView from "./Map/MapView";
import Phone from "../../assets/telephone-fill.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Bar from "../../assets/burger.svg";
import Parking from "../../assets/parking.svg";
import Grill from "../../assets/parrilla.svg";
import Dressing from "../../assets/percha.svg";
import Showers from "../../assets/shower.svg";
import Left from "../../assets/arrow-left-square.svg";
import LeftD from "../../assets/arrow-left-square-disabled.svg";
import Right from "../../assets/arrow-right-square.svg";
import RightD from "../../assets/arrow-right-square-disabled.svg";
import StarEmpty from "../../assets/star.svg";
import Star from "../../assets/star-fill.svg";
import HalfStar from "../../assets/star-half.svg";
import NoPhoto from "../../assets/no-photo.jpg";
import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";
import Field from "./Field";
import NewComment from "./NewComment";
import Swal from 'sweetalert2'


/*
CONECTAR CON EL BACKEND:
-MODIFICAR LAS GET
-PONER LOS MENSAJES DE LAS RESPONSE EN LOS ALERT

EXTRAER LA INFO DE USUARIO DESDE EL JWT

REVISAR LOS COMMENTS ASI NO QUEDA NADA COLGADO POR PULIR

DESINTALAR DBJSON Y ELIMINAR EL ARCHIVO
*/

const SportCenterDetail = ({idSportCenter}) => {
    const [sportCenter, setSportCenter] = useState(false);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [show, setShow] = useState(false);

    const URL = import.meta.env.VITE_DB;
    const stars = [];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    
    const starsFactory = () => {
        for(let i = 1; i <= sportCenter.rating/2 ; i++) { //1
            stars.push("fill");
        }
        for(let j = 0; j < sportCenter.rating%2 ; j++) {
            stars.push("half");
        }
        for(let k = stars.length; k < 5; k++) {
            stars.push("empty");
        }
    }

    starsFactory();

    const fetchingSportCenter = async () => {
        try {
            const response = await fetch(`${URL}sportcenter`);
            const data = await response.json();
            setSportCenter(data[0]);
        }
        catch (error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                confirmButtonColor: '#71B641',
                text: 'Algo salió mal', //Poner el mensaje del backend
            });
        }
    }

    const fetchingComments = async () => { //El fetch debe hacerse solo de comentarios activos
        if(page <= lastPage){
            try{
                const response = await fetch(`${URL}comments${page}`);
                const data = await response.json();
                setComments([...data]);
                setLastPage(3); //Traer desde back
            }
            catch (error){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    confirmButtonColor: '#71B641',
                    text: 'Algo salió mal', //Poner el mensaje del backend
                });
            }
        }
    }

    useEffect(()=>{
        fetchingSportCenter();
    },[]);
    
    useEffect(()=> {
        fetchingComments(); //Se podria hacer que los comentarios mas recientes esten primero
    }, [page]);

    return (!sportCenter)? (
            <h1 className="text-green my-3">Cargando...</h1>
        ):
        (
        <main>
            <div className="container">
                <section className="d-flex flex-column align-items-center">
                    <h1 className="fs-1 text-green my-4">{sportCenter.name}</h1>
                    <article className="mb-2 d-flex align-items-center">
                        {
                            stars.map((star,index) => {
                                if(star === "fill") return <img src={Star} alt="filled star" key={index}/>;
                                if(star === "half") return <img src={HalfStar} alt="half star" key={index}/>;
                                if(star === "empty") return <img src={StarEmpty} alt="empty star" key={index}/>;
                            })
                        }
                    </article>
                </section>
                <section className="d-flex gap-5 flex-column flex-md-row align-items-center justify-content-evenly">
                    <article className="main-picture">
                        <img className="rounded-3" src={sportCenter.photo || NoPhoto} alt={`${sportCenter.name} photo`} />
                    </article>
                    <article>
                        {
                            
                        }
                        <MapView latitude={sportCenter.location.latitude || 0} longitude={sportCenter.location.longitude || 0}></MapView>
                    </article>
                </section>
                <section className="text-center my-5">
                    <article className="services d-flex justify-content-center my-3">
                        {sportCenter.services.showers && <Service img={Showers} alt={"Grill service"} isAvaiable={true}></Service>}
                        {sportCenter.services.dressingRooms && <Service img={Dressing} alt={"Grill service"} isAvaiable={true}></Service>}
                        {sportCenter.services.bar && <Service img={Bar} alt={"Food service"} isAvaiable={true}></Service>}
                        {sportCenter.services.grill && <Service img={Grill} alt={"Grill service"} isAvaiable={true}></Service>}
                        {sportCenter.services.parking && <Service img={Parking} alt={"Parking service"} isAvaiable={true}></Service>}
                    </article>
                    <p className="fs-5">{sportCenter.description}</p>
                    <article className="d-flex justify-content-center my-3">
                        <img src={Phone} alt="Phone number" />
                        <p>{sportCenter.phone}</p>
                    </article>
                    <article className="d-flex justify-content-center gap-3 my-3">
                        <a href={sportCenter.social.instagram} target="_blank">
                            <img src={Instagram} alt="Instagram" />
                        </a>
                        <a href={sportCenter.social.facebook} target="_blank">
                            <img src={Facebook} alt="Facebook" />
                        </a>
                    </article>
                </section>
            </div>
            <section className="my-4 bg-cards py-4">{/*We have to use the component Card here, but it hasn't been developed yet*/}
                <h2 className="text-center fs-2 text-light my-5">Canchas disponibles:</h2>
                <article>
                    <Container>
                        <Row>
                            {
                                sportCenter.fields.map(field => {
                                    return (
                                        <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4} key={field._id}>
                                            <Field field={field}></Field>          
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </Container>
                </article>
            </section>
            <section>
                <h2 className="text-center text-green fs-2 my-5">Comentarios:</h2>
                <article>
                    <Container>
                        <Button variant="outline-success" onClick={handleShow}>Comentar</Button>
                            {
                                comments.map(comment => {
                                    return (
                                        <Comment key={comment._id} comment={comment} page={page} setComments={setComments}></Comment> //PONER COMO KEY el _id
                                    );
                                })
                            }
                    </Container>
                </article>
                <article className="d-flex gap-3 justify-content-center pages my-4">
                    {
                        (page > 1)?(
                            <div onClick={()=> setPage(page - 1)} className="h-100">
                                <img src={Left} alt="Previous page" className="h-100"/>
                            </div>
                        ):(
                            <img src={LeftD} alt="Previous page" className="h-100"/>
                        )
                    }{
                        (page < lastPage)?(
                            <div onClick={()=> setPage(page + 1)} className="h-100">
                                <img src={Right} alt="Next page" className="h-100"/>
                            </div>
                        ):(
                            <img src={RightD} alt="Next page"  className="h-100"/>
                        )
                    }                
                </article>
            </section>
            <NewComment page={page} setComments={setComments} show={show} onHide={handleClose} idSportCenter={sportCenter._id}></NewComment>
        </main>
    );
}

export default SportCenterDetail;