import { Button, Container, Modal, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { delet, single } from "../../services/Actions/employeeAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EmployeeView = () => {

    const { employees, employee } = useSelector(state => state.employeeReducer);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleEdit = (id) => {

        dispatch(single(id));

        navigate('/Employee-Edit');

    };

    const handleDelete = (id) => {

        dispatch(delet(id));

    }

    const handleView = (id) => {

        handleShow();
        dispatch(single(id));

    }

    return (
        <>
            <div className="mt-5">
                <Container>
                    <Row>
                        <div className="w-100 d-flex flex-wrap">
                            <div className="fr-bg p-3 w-100">
                                <h2>
                                    Manage Employees
                                </h2>
                            </div>
                            <div className="w-100 p-4 fr-border">
                                <Table striped bordered className="text-center">
                                    <thead className="vw-br">
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    {
                                        employees.length > 0 ?
                                            employees.map((data) => {
                                                return (
                                                    <tbody>
                                                        <tr>
                                                            <td>{data.fname}</td>
                                                            <td>{data.lname}</td>
                                                            <td>{data.email}</td>
                                                            <td>{data.address}</td>
                                                            <td>{data.phone}</td>
                                                            <td className="vw-btn">
                                                                <Button className="text-primary" onClick={() => handleView(data.id)}>
                                                                    <IoEyeSharp />
                                                                </Button>
                                                                <Button className="text-warning" onClick={() => handleEdit(data.id)}>
                                                                    <FaEdit />
                                                                </Button>
                                                                <Button className="text-danger" onClick={() => handleDelete(data.id)}>
                                                                    <MdDelete />
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                            :
                                            <h2 className="text-start p-4 text-danger">Employee Not Found !!!</h2>
                                    }
                                </Table>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            <h2>
                                                Employee
                                            </h2>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {
                                            employee ?
                                                <div className="w-100 p-4 fr-border">
                                                    <h2 className="mb-3 text-dark text-center">{employee.fname} {employee.lname}</h2>
                                                    <h4 className="p-2 text-dark">~ {employee.email}</h4>
                                                    <h4 className="p-2 text-dark">~ {employee.phone}</h4>
                                                    <h5 className="p-2 text-dark">~ {employee.address}</h5>
                                                </div> : ''
                                        }
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default EmployeeView
