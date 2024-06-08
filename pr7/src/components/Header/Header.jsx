import { Container, Row } from "react-bootstrap"
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <div className="hd-bg p-3">
                <Container>
                    <Row>
                        <div className="col-6">
                            <Link className="hd-icon" to='/'><FaHome /></Link>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-end">
                                <Link className="d-flex align-items-center hd-icon" to='/Employee-View'>
                                    <FaUser />
                                    <span className="ps-2">Employee Management</span>
                                </Link>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header
