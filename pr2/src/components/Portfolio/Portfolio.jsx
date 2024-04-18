import { useState } from 'react'
import { Row, Col, Container, Nav, Tab } from "react-bootstrap"

const Portfolio = () => {

    const [activeTab, setActiveTab] = useState('all');

    const handleSelect = (eventKey) => {
        setActiveTab(eventKey);
    };

    return (
        <section id="portfolio" className="portfolio">
            <Container>
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
                    <Nav id="portfolio-flters" className="d-flex justify-content-center">
                        <Nav.Item>
                            <Nav.Link eventKey="all">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="app">App</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="card">Card</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="web">Web</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="all" className='portfolio-container'>
                            <Row>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="img2" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="img8" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="img9" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="img4" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="img7" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="img3" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="img5" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="img6" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="img1" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="app" className='portfolio-container'>
                            <Row>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="img1" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="img3" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-app">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="img6" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>App</p>
                                        <a href="src/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="card" className='portfolio-container'>
                            <Row>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="img4" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 2</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="img7" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 1</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-card">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="img8" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Card 3</h4>
                                        <p>Card</p>
                                        <a href="src/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="web" className='portfolio-container'>
                            <Row>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="img2" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="img5" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 2</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" className="portfolio-item filter-web">
                                    <div className="portfolio-img">
                                        <img src="src/assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="img9" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h4>Web 3</h4>
                                        <p>Web</p>
                                        <a href="src/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </section >
    )

}

export default Portfolio