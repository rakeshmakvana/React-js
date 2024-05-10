import { useState } from "react";
import getData from '../../services/helper'
import { useNavigate } from "react-router-dom";


const View = () => {


    const [data, setData] = useState(getData());

    const editPage = useNavigate();


    const handleEdit = (id) => {

        let records = data;

        let updatedData = records.filter((record) => {
            return id === record.id;
        })

        editPage('/Edit', { state: updatedData[0] });

    };


    const handleDelete = (id) => {

        let records = data;

        let deletedData = records.filter((record) => {
            return id !== record.id;
        })

        setData(deletedData);

        localStorage.setItem('data', JSON.stringify(deletedData))

    };


    return (
        <>
            <div className="user-bg p-5">
                <div className="mb-5 text-center text-success">
                    <h1>Users</h1>
                </div>
                {data.length > 0 ? data.map((el) => (
                    <div className="w-100 d-flex flex-wrap justify-content-center align-items-center mb-5">
                        <div className="card w-50 p-4 text-bg-light">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">{el.name}</h3>
                                <h5 className="mb-3"><span>Course :- </span>{el.field}</h5>
                                <h5 className="mb-3"><span>Zender :- </span>{el.gender}</h5>
                                <h5 className="mb-3"><span>Email :- </span>{el.email}</h5>
                                <h5 className="mb-3"><span>Contact :- </span>{el.contact}</h5>
                                <h5><span>Description :- </span>{el.description}</h5>
                                <div className="d-flex justify-content-center w-100 pt-4">
                                    <button className="btn px-5 btn-primary me-3" onClick={() => handleEdit(el.id)}>Edit</button>
                                    <button className="btn px-5 btn-danger ms-3" onClick={() => handleDelete(el.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <h3 className="text-center text-danger">No Users Found</h3>}
            </div>
        </>
    )

}

export default View