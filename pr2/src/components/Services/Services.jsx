import { Row, Col, Container } from "react-bootstrap"

const Services = () => {

    return (
        <section id="services" className="services section-bg">
            <Container>
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Row>
                    <Col xl="3" md="6" className="d-flex align-items-stretch">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><a href="#">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </Col>
                    <Col xl="3" md="6" className="d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4><a href="#">Sed ut perspici</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </Col>
                    <Col xl="3" md="6" className="d-flex align-items-stretch mt-4 mt-xl-0">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4><a href="#">Magni Dolores</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </Col>
                    <Col xl="3" md="6" className="d-flex align-items-stretch mt-4 mt-xl-0">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i></div>
                            <h4><a href="#">Nemo Enim</a></h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Services