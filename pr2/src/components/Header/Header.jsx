import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {

    const [Header, setHeader] = useState('fixed-top');

    const handleHeader = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            setHeader('fixed-top header-scrolled')
        } else {
            setHeader('fixed-top')
        }
    }

    window.addEventListener('scroll', handleHeader);

    return (
        <header id="header" className={Header}>
            <Container>
                <Navbar expand="lg" className="d-flex align-items-center">
                    <Navbar.Brand href="index.html">
                        <img src="src/assets/img/favicon.png" alt="logo" className="img-fluid logo" />
                        <h2 className='ps-2'>Rakesh</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link className="scrollto" href="#hero">Home</Nav.Link>
                            <Nav.Link className="scrollto" href="#about">About</Nav.Link>
                            <Nav.Link className="scrollto" href="#services">Services</Nav.Link>
                            <Nav.Link className="scrollto" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className="scrollto" href="#team">Team</Nav.Link>
                            <Nav.Link className="scrollto" href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link className="getstarted scrollto px-3" href="#about">Get Started</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    )

}

export default Header