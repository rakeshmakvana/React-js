import Comment from "../Comment/Comment"

const Post = (props) => {

    return (
        <div className="container p-5">
            <div className="row flex-wrap">
                <div className="col-6">
                    <div className="img-fram">
                        <img src={props.post} alt="userpost" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="post-fram">
                        <div className="user-box d-flex flex-wrap w-100 p-3 align-items-center">
                            <div className="col-1">
                                <div className="profile-img ps-3">
                                    <img src={props.primg} alt="profile-img" />
                                </div>
                            </div>
                            <div className="col-11">
                                <div className="profile-name ps-3">
                                    <h5>{props.name}</h5>
                                </div>
                            </div>
                        </div>
                        <Comment />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Post