import { Container, Row, Col } from "react-bootstrap"

const Client = () => {

    return (
        <section id="clients" className="clients section-bg">
            <Container>
                <Row>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-1.png" className="img-fluid" alt="img1" />
                    </Col>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-2.png" className="img-fluid" alt="img2" />
                    </Col>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-3.png" className="img-fluid" alt="img3" />
                    </Col>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-4.png" className="img-fluid" alt="img4" />
                    </Col>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-5.png" className="img-fluid" alt="img5" />
                    </Col>
                    <Col lg="2" md="4" xs="6" className="d-flex align-items-center justify-content-center" >
                        <img src="src/assets/img/clients/client-6.png" className="img-fluid" alt="img6" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Client