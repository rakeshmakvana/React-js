import { useState } from "react"

const Comment = () => {

    const [input, setInput] = useState({
        comment: ''
    });

    const [comment, setComment] = useState([]);

    const handleInput = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInput({ ...input, [name]: value });

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setComment([...comment, input]);

        setInput({
            comment: ''
        });

    }

    return (
        <>
            <div className="comment-box w-100 p-3">
                {comment.length > 0 ? comment.map((data) => {
                    return <div className="d-flex flex-wrap w-100">
                        <div className="col-1 p-3">
                            <div className="comment-img ps-3">
                                <img src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="profile-img" />
                            </div>
                        </div>
                        <div className="col-11 p-3">
                            <div className="comment-name ps-3">
                                <h6>rakesh makvana</h6>
                            </div>
                            <div className="comment-cm ps-3">
                                <p>&#8729; {data.comment}</p>
                            </div>
                        </div>
                    </div>
                }) : <p className="text-danger p-4">&#8729; No Comments</p>}
            </div>
            <div className="input-box p-3">
                <form className="col-12 d-flex flex-wrap justify-content-center align-items-center" onSubmit={(e) => handleSubmit(e)}>
                    <h4 className="mb-0 pe-3">&#9829;</h4>
                    <input className="w-75 text-bg-info p-1" type="text" placeholder=" Enter Comments..." name="comment" value={input.comment} onChange={(e) => handleInput(e)} />
                    <button type="submit" className="ms-3 px-3 btn btn-primary bordered">Send</button>
                </form>
            </div>
        </>
    )

}

export default Comment
