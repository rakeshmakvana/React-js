import { Row, Col, Container } from "react-bootstrap"

const Pricing = () => {

    return (
        <section id="pricing" className="pricing">
            <Container>
                <div className="section-title">
                    <h2>Pricing</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Row>
                    <Col lg="4">
                        <div className="box">
                            <h3>Free Plan</h3>
                            <h4><sup>$</sup>0<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                            </ul>
                            <a href="#" className="buy-btn">Get Started</a>
                        </div>
                    </Col>
                    <Col lg="4" className="mt-4 mt-lg-0">
                        <div className="box featured">
                            <h3>Business Plan</h3>
                            <h4><sup>$</sup>29<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="buy-btn">Get Started</a>
                        </div>
                    </Col>
                    <Col lg="4" className="mt-4 mt-lg-0">
                        <div className="box">
                            <h3>Developer Plan</h3>
                            <h4><sup>$</sup>49<span>per month</span></h4>
                            <ul>
                                <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
                                <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
                                <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
                                <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
                                <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                            </ul>
                            <a href="#" className="buy-btn">Get Started</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section >
    )

}

export default Pricing