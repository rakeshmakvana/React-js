
const UserProfileCard = (props) => {

    return (

        <section className="w-100 vh-100 pr-bg d-flex flex-wrap align-items-center justify-content-center">
            <div className="card p-4 w-50">
                <h5 className="card-header d-flex flex-wrap align-items-center p-3">
                    <img src={props.profile} alt="profile-img" />
                    <h1 className="ps-3">{props.name} {props.lname}</h1>
                </h5>
                <div className="card-body">
                    <h3>&#10070; couse :- <span>{props.course}</span></h3>
                    <h3>&#10070; dob :- <span>{props.dob}</span></h3>
                    <h3>&#10070; zender :- <span>{props.zender}</span></h3>
                    <h3>&#10070; email :- <span>{props.email}</span></h3>
                    <h3>&#10070; contact :- <span>{props.contact}</span></h3>
                    <h3>&#10070; Addresh :- <span>{props.addresh}</span></h3>
                </div>
            </div>
        </section>

    )

}

export default UserProfileCard
