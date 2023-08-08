import { Col, Container, Row } from "react-bootstrap";
import "./SportCenterDetail.css";

const SportCenterDetail = ({sportCenter}) => {
    /*
      const sportCenter = {
    _id: "ObjectId(sportCenter)",
    name: "Sport Center",
    address: "Av. Perón 1226",
    location: `26°48'12.8"S 65°16'44.6"W`,
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
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                        <Col xs={12} md={4} lg= {3}>
                            <div className="card bg-danger m-2"></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default SportCenterDetail;