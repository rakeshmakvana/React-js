import { Row, Col, Accordion, Container } from "react-bootstrap"

const Whyus = () => {

    return (
        <section id="why-us" className="why-us section-bg">
            <Container fluid>
                <Row>
                    <Col lg="7" className="d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content">
                            <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                        </div>
                        <div className="accordion-list">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><span>01 Non consectetur a erat nam at lectus urna duis?</span> <i className="bx bx-chevron-down icon-show"></i></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><span>02 Feugiat scelerisque varius morbi enim nunc? </span> <i className="bx bx-chevron-down icon-show"></i></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><span>03 Dolor sit amet consectetur adipiscing elit? </span> <i className="bx bx-chevron-down icon-show"></i></Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg="5" className="align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: `url("src/assets/img/why-us.png")` }}></Col>
                </Row>
            </Container>
        </section>
    )

}

export default Whyus