import { Row, Col, Container } from "react-bootstrap"

const Team = () => {

    return (
        <section id="team" className="team section-bg">
            <Container>
                <div className="section-title">
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Row>
                    <Col lg="6">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="src/assets/img/team/team-1.jpg" className="img-fluid" alt="img1" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                <div className="social">
                                    <a href="#"><i className="ri-twitter-fill"></i></a>
                                    <a href="#"><i className="ri-facebook-fill"></i></a>
                                    <a href="#"><i className="ri-instagram-fill"></i></a>
                                    <a href="#"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className="mt-4 mt-lg-0">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="src/assets/img/team/team-2.jpg" className="img-fluid" alt="img2" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                <div className="social">
                                    <a href="#"><i className="ri-twitter-fill"></i></a>
                                    <a href="#"><i className="ri-facebook-fill"></i></a>
                                    <a href="#"><i className="ri-instagram-fill"></i></a>
                                    <a href="#"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className="mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="src/assets/img/team/team-3.jpg" className="img-fluid" alt="img3" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                <div className="social">
                                    <a href="#"><i className="ri-twitter-fill"></i></a>
                                    <a href="#"><i className="ri-facebook-fill"></i></a>
                                    <a href="#"><i className="ri-instagram-fill"></i></a>
                                    <a href="#"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" className="mt-4">
                        <div className="member d-flex align-items-start">
                            <div className="pic"><img src="src/assets/img/team/team-4.jpg" className="img-fluid" alt="img4" /></div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                <div class="social">
                                    <a href="#"><i className="ri-twitter-fill"></i></a>
                                    <a href="#"><i className="ri-facebook-fill"></i></a>
                                    <a href="#"><i className="ri-instagram-fill"></i></a>
                                    <a href="#"> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Team