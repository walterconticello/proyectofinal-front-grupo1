import { Col, Container, Row } from "react-bootstrap";
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
import { useEffect } from "react";
import { useState } from "react";
import Comment from "./Comment";

const SportCenterDetail = ({idSportCenter}) => {
    const [sportCenter, setSportCenter] = useState(false);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const URL = import.meta.env.VITE_DB;

    const fetchingSportCenter = async () => {
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setSportCenter(data[0]);
        }
        catch (error){
            console.log('Error fetching data:', error);
        }
    }

    const fetchingComments = async () => {
        if(page <= lastPage){
            try{
                const response = await fetch(`http://localhost:3000/comments${page}`);
                const data = await response.json();
                setComments([...data]);
                setLastPage(3); //Traer desde back
            }
            catch (error){
                console.log('Error fetching data:', error);
            }
        }
    }

    useEffect(()=>{
        fetchingSportCenter();
    },[]);
    
    useEffect(()=> {
        fetchingComments();
    }, [page]);

    return (!sportCenter)? (
            <h1 className="text-green my-3">Cargando...</h1>
        ):
        (
        <main>
            <div className="container">
                <h1 className="text-center fs-1 text-green my-4">{sportCenter.name}</h1>
                <section className="d-flex gap-5 flex-column flex-md-row align-items-center justify-content-evenly">
                    <article className="main-picture">
                        <img className="rounded-3" src={sportCenter.photo} alt={`${sportCenter.name} photo`} />
                    </article>
                    <article>
                        <MapView latitude={sportCenter.location.latitude} longitude={sportCenter.location.longitude}></MapView>
                    </article>
                </section>
                <section className="text-center my-5">
                    <article className="services d-flex justify-content-center">
                        <Service img={Grill} alt={"Grill service"} isAvaiable={true}></Service>
                        <Service img={Bar} alt={"Food service"} isAvaiable={true}></Service>
                        <Service img={Parking} alt={"Parking service"} isAvaiable={true}></Service>
                        <Service img={Dressing} alt={"Grill service"} isAvaiable={true}></Service>
                        <Service img={Showers} alt={"Grill service"} isAvaiable={true}></Service>
                    </article>
                    <p className="fs-5">{sportCenter.description}</p>
                    <article className="d-flex justify-content-center my-3">
                        <img src={Phone} alt="Phone number" />
                        <p>{sportCenter.phone}</p>
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
                                            <div className="card bg-white m-2">{field.name}</div>
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
                        <Row>
                            {
                                comments.map(comment => {
                                    return (
                                        <Col className="d-flex justify-content-center align-items-center" xs={12} key={comment._id}>
                                            <Comment comment={comment}></Comment>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
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
        </main>
    );
}

export default SportCenterDetail;