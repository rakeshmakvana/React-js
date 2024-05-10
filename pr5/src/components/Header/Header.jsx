import { Link } from 'react-router-dom'
import Logo from '/src/assets/logo.png'

const Header = () => {

    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg p-3 bg-success border-bottom border-body">
                    <div class="container">
                        <img src={Logo} alt="logo" className='logo'/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-flex justify-content-lg-end" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item px-3">
                                    <Link class="nav-link active" to="/">Home</Link>
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link" to="/Add">Add</Link>
                                </li>
                                <li class="nav-item px-3">
                                    <Link class="nav-link" to="/View">View</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )

}

export default Header
