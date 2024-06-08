import generateUniqueId from "generate-unique-id";
import { useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { add } from "../../services/Actions/employeeAction";
import { useDispatch } from "react-redux";

const EmployeeForm = () => {

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        address: '',
        phone: '',
        id: ''
    });

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value

        setInput({ ...input, [name]: value });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        let obj = {
            ...input
        }

        obj.id = generateUniqueId({
            length: 5,
            useLetters: false
        });

        dispatch(add(obj));

        setInput({
            fname: '',
            lname: '',
            email: '',
            address: '',
            phone: '',
            id: ''
        });

        navigate('/Employee-View');

    };

    return (
        <>
            <div className="mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <div className="w-50 d-flex flex-wrap">
                            <div className="fr-bg p-3 w-100">
                                <h2>
                                    New Employee
                                </h2>
                            </div>
                            <div className="w-100 p-4 fr-border">
                                <Form onSubmit={(e) => handleSubmit(e)}>
                                    <Form.Group className="d-flex flex-wrap align-items-center mb-4">
                                        <Form.Label className="w-25">First Name *</Form.Label>
                                        <Form.Control className="w-75" name="fname" value={input.fname} onChange={(e) => handleInput(e)} />
                                        <Form.Control className="w-75" type="text" value={input.id} hidden />
                                    </Form.Group>
                                    <Form.Group className="d-flex flex-wrap align-items-center mb-4">
                                        <Form.Label className="w-25">Last Name *</Form.Label>
                                        <Form.Control className="w-75" name="lname" value={input.lname} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="d-flex flex-wrap align-items-center mb-4">
                                        <Form.Label className="w-25">Email *</Form.Label>
                                        <Form.Control className="w-75" name="email" value={input.email} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="d-flex flex-wrap align-items-center mb-4">
                                        <Form.Label className="w-25">Address *</Form.Label>
                                        <Form.Control className="w-75" name="address" as="textarea" rows={3} value={input.address} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <Form.Group className="d-flex flex-wrap align-items-center mb-4">
                                        <Form.Label className="w-25">Phone *</Form.Label>
                                        <Form.Control className="w-75" name="phone" value={input.phone} onChange={(e) => handleInput(e)} />
                                    </Form.Group>
                                    <div className="d-flex flex-wrap w-100 justify-content-center">
                                        <Button className="px-3" variant="success" type="submit">
                                            SUBMIT
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default EmployeeForm
