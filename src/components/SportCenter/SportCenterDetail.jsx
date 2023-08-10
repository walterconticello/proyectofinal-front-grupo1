import { Col, Container, Row } from "react-bootstrap";
import "./SportCenterDetail.css";
import MapView from "./Map/MapView";
import Phone from "../../../public/telephone-fill.svg";

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
    phone: "+54-381-1532115",
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
                    <p className="fs-5">{sportCenter.description}</p>
                    <div className="d-flex justify-content-center my-3">
                        <img src={Phone} alt="Phone number" />
                        <p>{sportCenter.phone}</p>
                    </div>
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