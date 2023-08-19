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

const SportCenterDetail = ({sportCenter}) => {
    /*
      const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "Sport Center",
    location: {
        latitude: "-26.803525",
        longitude: "-65.278823",
    },
    photo: "",
    owner: "ObjectId(owner)",
    description: "Contamos con 10 canchas impecables y vestuarios, parrilla y bar",
        contact: {
        phone: "+54-381-1532115",
        instagram: "+54-381-1532115",
        facebook: "+54-381-1532115",
    },
    services: {
        showers: true,
        dressingRooms: true,
        bar: false,
        grill: true,
        parking: false,
    },
    isActive: true,
  }*/
    
    return (
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
                        <p>{sportCenter.contact.phone}</p>
                    </article>
                </section>
            </div>
            <section className="my-4 bg-cards py-4">{/*We have to use the component Card here, but it hasn't been developed yet*/}
                <h2 className="text-center fs-2 text-light my-5">Canchas disponibles:</h2>
                <article>
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 1</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 2</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 4</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 4</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 5</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 6</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 7</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 8</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 9</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-white m-2">Cancha 10</div>
                            </Col>
                        </Row>
                    </Container>
                </article>
            </section>
        </main>
    );
}

export default SportCenterDetail;