const BookingForm = ({ input, handleInput, handleSubmit }) => {

    return (
        <>
            <div className="form-bg d-flex justify-content-center align-items-center">
                <div className="main-box d-flex flex-wrap">
                    <div className="h1-box w-100 p-4 text-center">
                        <h1>Hotel Booking</h1>
                    </div>
                    <div className="form-box w-100">
                        <form className="w-100" onSubmit={(e) => { handleSubmit(e) }}>
                            <div className="d-flex flex-wrap w-100 px-4 my-4">
                                <label className="form-label w-100">Name*</label>
                                <div className="pe-2 w-50">
                                    <input type="text" className="form-control w-100" placeholder="First Name" name="fname" value={input.fname} onChange={(e) => { handleInput(e) }} />
                                </div>
                                <div className="ps-2 w-50">
                                    <input type="text" className="form-control w-100" placeholder="Last Name" name="lname" value={input.lname} onChange={(e) => { handleInput(e) }} />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap px-4 mb-4">
                                <div className="w-50 pe-2">
                                    <label className="form-label w-100">Email*</label>
                                    <input type="email" className="form-control w-100" placeholder="Email Address" name="email" value={input.email} onChange={(e) => { handleInput(e) }} />
                                </div>
                                <div className="w-50 ps-2">
                                    <label className="form-label w-100">Contact*</label>
                                    <input type="number" className="form-control w-100" placeholder="Contact Number" name="contact" value={input.contact} onChange={(e) => { handleInput(e) }} />
                                </div>
                            </div>
                            <div className="d-flex flex-wrap px-4 mb-4">
                                <div className="col-3 pe-2">
                                    <label className="form-label w-100">Number Of People*</label>
                                    <input type="number" className="form-control w-100" placeholder="0" name="people" value={input.people} onChange={(e) => { handleInput(e) }} />
                                </div>
                                <div className="col-4 ps-2">
                                    <label className="form-label w-100">Select Date*</label>
                                    <input type="date" className="form-control w-100" name="date" value={input.date} onChange={(e) => { handleInput(e) }} />
                                </div>
                                <div className="col-5 px-2">
                                    <label className="form-label w-100">Type Of Room*</label>
                                    <select className="form-select" aria-label="Default select example" name="room" value={input.room} onChange={(e) => { handleInput(e) }}>
                                        <option selected value="">Select Room Types</option>
                                        <option value="None AC Room (500₹)">None AC Room (500₹)</option>
                                        <option value="AC Room (1000₹)">AC Room (1000₹)</option>
                                        <option value="Delax Room (1500₹)">Delax Room (1500₹)</option>
                                        <option value="Resort Room (2000₹)">Resort Room (2000₹)</option>
                                        <option value="Star Room (3000₹)">5Star Room (3000₹)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-4 mb-4">
                                <label className="form-label">Address*</label>
                                <textarea type="text" className="form-control" rows="3" placeholder="Current Address" name="address" value={input.address} onChange={(e) => { handleInput(e) }}></textarea>
                            </div>
                            <div className="col-12 px-4 mb-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" required />
                                    <label className="form-label">
                                        Agree to terms and conditions*
                                    </label>
                                </div>
                            </div>
                            <div className="btn-box p-3 w-100 text-center">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default BookingForm
