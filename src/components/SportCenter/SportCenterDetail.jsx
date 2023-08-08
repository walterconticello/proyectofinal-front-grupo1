import { Col, Container, Row } from "react-bootstrap";
import "./SportCenterDetail.css";

const SportCenterDetail = ({sportCenter}) => {
    /*
      const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "Sport Center",
    address: "Av. Perón 1226",
    latitude: "-26.803525",
    longitude: "-65.278823",
    photo: "",
    owner: "ObjectId(owner)",
    isActive: true,
  }*/
    
    return (
        <main className="container">
            <h1 className="text-center fs-1 text-green my-4">{sportCenter.name}</h1>
            <section className="d-flex gap-5 flex-column flex-md-row align-items-center">
                <article className="main-picture">
                    <img className="rounded-3" src={sportCenter.photo} alt={`${sportCenter.name} photo`} />
                </article>
                <article>
                    <p>Dirección: {sportCenter.address}</p>
                </article>
            </section>
            <section className="my-4">{/*We have to use the component Card here, but it hasn't been developed yet*/}
                <h2 className="text-center fs-2 text-green my-5">Canchas disponibles:</h2>
                <article>
                    <Container>
                        <Row>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 1</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 2</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 4</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 4</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 5</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 6</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 7</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 8</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 9</div>
                            </Col>
                            <Col className="d-flex justify-content-center align-items-center" xs={12} md={6} lg= {4}>
                                <div className="card bg-danger m-2">Cancha 10</div>
                            </Col>
                        </Row>
                    </Container>
                </article>
            </section>
        </main>
    );
}

export default SportCenterDetail;