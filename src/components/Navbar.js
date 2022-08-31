import logo from '../assets/images/logo.svg';
import "@fontsource/dm-sans"
import "@fontsource/poppins"
import "../../node_modules/bootstrap/dist/js/bootstrap.js";


const Navbar = () => {
    return (
    <div className="bitc__navbar">
        <nav className="navbar navbar-expand-lg bitc__navbar-bg">
            <div className="bitc__navbar-container">
                <a className="navbar-brand mx-3" href="/">
                    <img src={logo} className="d-inline-block align-text-top me-2" alt="logo"/>
                    BitCloud
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5 me-0" id="navbarSupportedContent">
                    <ul className="navbar-nav bitc__navbar-left me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="saf.s">Exchange</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="saf.s">Buy Crypto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="saf.s">Market</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="saf.s">Discover</a>
                        </li>
                    </ul>


                    <ul className="navbar-nav bitc__navbar-right mb-2 mb-lg-0 flex-row justify-content-center align-items-center">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle navdrop" href="#asfasf" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            EN/USD
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#fafsf">AR/EGP</a></li>
                            </ul>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link bitc__navbar-s-up-btn" aria-current="page" href="saf.s">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link bitc__navbar-login-btn" aria-current="page" href="saf.s">Login</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    </div>
    );
}
 
export default Navbar;