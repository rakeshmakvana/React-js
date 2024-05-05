const PeopleBooked = ({ data, handleEdit, handleDelete }) => {

    return (
        <>
            <div className="veiw-bg d-flex flex-wrap justify-content-center align-items-center p-5">
                <div className="main-box d-flex flex-wrap col-4 mt-4">
                    <div className="h1-box-2 w-100 p-4 text-center">
                        <h1>Hotel Booking List</h1>
                    </div>
                </div>
                {data.length > 0
                    ?
                    <table className="table table-bordered mt-5 col-12">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Contact</th>
                                <th scope="col">People</th>
                                <th scope="col">Date</th>
                                <th scope="col">Room</th>
                                <th scope="col">Address</th>
                                <th scope="col" colSpan={2}>*</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((el) => {
                                return <tr>
                                    <td>{el.fname} {el.lname}</td>
                                    <td>{el.email}</td>
                                    <td>{el.contact}</td>
                                    <td>{el.people}</td>
                                    <td>{el.date}</td>
                                    <td>{el.room}</td>
                                    <td>{el.address}</td>
                                    <td className="bg-success"><button className="btn-2 text-white" onClick={() => handleEdit(el.id)}>EDIT</button></td>
                                    <td className="bg-danger"><button className="btn-2 text-white" onClick={() => handleDelete(el.id)}>DELETE</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    :
                    <table className="table mt-5 col-11">
                        <thead>
                            <tr>
                                <th scope="col" style={{ fontSize: 25 }} className="text-danger bg-white">No Booking List found !!</th>
                            </tr>
                        </thead>
                    </table>
                }
            </div>
        </>
    )

}

export default PeopleBooked
