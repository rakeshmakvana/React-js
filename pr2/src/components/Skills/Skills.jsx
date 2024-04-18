import { Row, Col, ProgressBar, Container } from "react-bootstrap"

const Skills = () => {

    return (
        <section id="skills" className="skills">
            <Container>
                <Row>
                    <Col lg="6" className="align-items-center">
                        <img src="src/assets/img/skills.png" className="img-fluid" alt="img1" />
                    </Col>
                    <Col lg="6" className="pt-4 pt-lg-0 content">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div className="skills-content">
                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar variant="#4668A2" now={100} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar variant="#4668A2" now={90} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">75%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar variant="#4668A2" now={75} />
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Photoshop <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <ProgressBar variant="#4668A2" now={55} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )

}

export default Skills