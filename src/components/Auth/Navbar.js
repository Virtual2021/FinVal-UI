import logo from "../../assets/finimg/logo.png";
import goldenlogo from "../../assets/finimg/logo-golden.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
const handleLogout = () => {
    localStorage.clear(); // Clear all data from localStorage
    window.location.href = '/user-login';
};
  return (
    <>
        <header>
                <nav className="navbar navbar-expand-lg mini-header position-relative">
                    <div className="container-fluid">
                        <div className="col-auto me-lg-0 me-auto">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} data-at2x={logo} alt="" className="default-logo" width="91"
                                    height="30" />
                                <img src={logo} data-at2x={logo} alt="" className="alt-logo" width="0"
                                    height="0" />
                                <img src={goldenlogo} data-at2x={goldenlogo} alt="" className="mobile-logo"
                                    width="0" height="0" />
                            </Link>
                        </div>
                        <div className="col-auto menu-order position-static">
                            <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="#navbarNav-clone" aria-expanded="false"
                                aria-label="Toggle navigation" data-target="#navbarNav-clone">
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                                <span className="navbar-toggler-line"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                                    <li className="nav-item dropdown simple-dropdown hover-dropdown">
                                        <a href="#!" className="nav-link">Product</a>
                                        <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink_1" role="button" aria-expanded="false"></i>
                                        <ul className="dropdown-menu menu-li-hover" aria-labelledby="navbarDropdownMenuLink">
                                            <li><Link to="/how-it-works" className="text-base-color">How it works</Link></li>
                                            <li><a href="#!" className="text-base-color">Finance planning</a></li>
                                            <li><a href="#!" className="text-base-color">Wealth management</a></li>
                                            <li><a href="#!" className="text-base-color">Strategic planning</a></li>
                                            <li><a href="#!" className="text-base-color">Audit assurance</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><Link to="/team" className="nav-link">Team</Link></li>
                                    <li className="nav-item"><Link to="/pricing" className="nav-link">Pricing</Link></li>
                                    <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                                    <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto text-end d-none d-sm-flex">
                            <div className="header-icon lh-1">
                                <div className="header-button fs-16">Hi, {localStorage.getItem('name')}</div>
                            </div>
                            <div className="header-icon lh-1 ms-15px">
                                <li className="nav-item dropdown simple-dropdown list-unstyled">
                                <a href="#!" className="text-white lh-1 text-golden-hover dropdown-toggle" id="navbarDropdownMenuLink_1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle m-0"></i>
                                </a>
                                    <ul className="dropdown-menu end-0 m-0 ps-10px pt-0 pe-10px pb-15px fs-12 box-shadow" aria-labelledby="navbarDropdownMenuLink" style={{ minWidth: '130px', 'left': '-60.7969px'}} >
                                        <li className="mt-15px">
                                            <Link to="/valuation-form" className="text-golden-hover">
                                                <i class='bi bi-pencil-square me-5px text-blue'></i>New Order
                                            </Link>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <Link to="/orders" className="text-golden-hover">
                                                <i class='bi bi-box-seam me-5px text-blue'></i>My Orders
                                            </Link>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <Link to="/my-plan" className="text-golden-hover">
                                                <i class='bi bi-clipboard-check me-5px text-blue'></i>Plans & Billing
                                            </Link>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <Link to="upgrade-plan" className="text-golden-hover">
                                                <i class='bi bi-box-arrow-up me-5px text-blue'></i>Upgrade Plan
                                            </Link>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <Link to="/profile" className="text-golden-hover">
                                                <i class='bi bi-person me-5px text-blue'></i>My Profile
                                            </Link>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="#!" onClick={handleLogout} className="text-golden-hover">
                                                <i class='bi bi-power me-5px text-blue'></i>Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    </>
  );
};

export default Navbar;
