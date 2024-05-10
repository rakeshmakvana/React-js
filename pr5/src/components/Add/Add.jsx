import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getData from '../../services/helper'
import uniqid from 'uniqid';


const Add = () => {


    const [input, setInput] = useState({
        id: '',
        name: '',
        email: '',
        contact: '',
        field: '',
        gender: '',
        description: ''
    });

    const viewPage = useNavigate();

    let data = getData();


    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInput({ ...input, [name]: value });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        let obj = { ...input }
        obj.id = uniqid();
        data = [...data, obj];

        setInput({
            id: '',
            name: '',
            email: '',
            contact: '',
            field: '',
            gender: '',
            description: ''
        });

        localStorage.setItem('data', JSON.stringify(data));

        viewPage('/View');

    };


    return (
        <>
            <div className="form-bg d-flex justify-content-center align-items-center">
                <form className="w-25" onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3 text-center text-success">
                        <h1>FORM</h1>
                    </div>
                    <div className="mb-3 w-100">
                        <label className="form-label">Name :-</label>
                        <input type="text" className="form-control" placeholder="Enter Name" name="name" value={input.name} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email :-</label>
                        <input type="email" className="form-control" placeholder="Enter Email" name="email" value={input.email} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contact :-</label>
                        <input type="number" className="form-control" placeholder="Enter Contact" name="contact" value={input.contact} onChange={(e) => handleInput(e)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Field :-</label>
                        <select className="form-select" name="field" onChange={(e) => handleInput(e)}>
                            <option selected>Select Field</option>
                            <option value="Full Stack Devlopment">Full Stack Devlopment</option>
                            <option value="Game Devlopment">Game Devlopment</option>
                            <option value="App Devlopment">App Devlopment</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="Graphics Designer">Graphics Designer</option>
                            <option value="2D/3D Animation">2D/3D Animation</option>
                            <option value="Sibar Security">Sibar Security</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" value="male" onChange={(e) => handleInput(e)} />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="gender" value="female" onChange={(e) => handleInput(e)} />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" placeholder="Description" rows={3} name="description" value={input.description} onChange={(e) => handleInput(e)} />
                    </div>
                    <input type="text" name="id" value={input.id} onChange={(e) => handleInput(e)} hidden />
                    <button type="submit" className="btn text-bg-success w-25 p-2">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )

}

export default Add