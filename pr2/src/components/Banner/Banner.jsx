import { Container, Row, Nav, Col } from "react-bootstrap"

const Banner = () => {

    return (
        <section id="hero" className="d-flex align-items-center">
            <Container>
                <Row>
                    <Col lg="6" className="d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
                        <h1>Better Solutions For Your Business</h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Nav.Link href="#about" className="btn-get-started scrollto">Get Started</Nav.Link>
                            <Nav.Link href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></Nav.Link>
                        </div>
                    </Col>
                    <Col lg="6" className="order-1 order-lg-2 hero-img">
                        <img src="src/assets/img/hero-img.png" className="img-fluid animated" alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Banner