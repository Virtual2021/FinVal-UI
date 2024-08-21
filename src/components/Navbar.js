import { Link } from "react-router-dom";
import logo from "../assets/finimg/logo.png";
import goldenlogo from "../assets/finimg/logo-golden.png";

const Navbar = () => {
  return (
    <>
        <header>
            <nav className="navbar navbar-expand-lg mini-header position-relative">
                <div className="container-fluid"> 
                    <div className="col-auto me-lg-0 me-auto">
                        <a className="navbar-brand" href="demo-finance.html">
                            <img src={logo} data-at2x={logo} alt="" className="default-logo"/>
                            <img src={logo} data-at2x={logo} alt="" className="alt-logo"/>
                            <img src={goldenlogo} data-at2x={goldenlogo} alt="" className="mobile-logo" />
                        </a>
                    </div>
                    <div className="col-auto menu-order position-static">
                        <button className="navbar-toggler float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                            <span className="navbar-toggler-line"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav alt-font"> 
                                <li className="nav-item"><a href="demo-finance.html" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="demo-finance-about.html" className="nav-link">About</a></li>
                                <li className="nav-item dropdown simple-dropdown">
                                    <a href="demo-finance-expertise.html" className="nav-link">Expertise</a>
                                    <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink_1" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
                                        <li><a href="demo-finance-expertise-details.html">Finance planning</a></li>
                                        <li><a href="demo-finance-expertise-details.html">Wealth management</a></li>
                                        <li><a href="demo-finance-expertise-details.html">Strategic planning</a></li>
                                        <li><a href="demo-finance-expertise-details.html">Audit assurance</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a href="demo-finance-team.html" className="nav-link">Team</a></li>
                                <li className="nav-item"><a href="demo-finance-pricing.html" className="nav-link">Pricing</a></li>
                                <li className="nav-item"><a href="demo-finance-news.html" className="nav-link">News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto text-end d-none d-sm-flex"> 
                        <div className="header-icon lh-1">
                            <div className="header-button">
                                <Link to="/payment" className="btn text-transform-none golden-btn lh-1"><i className="feather icon-feather-shopping-bag m-0"></i> BUY NOW</Link>
                            </div>
                        </div>
                        <div className="header-icon lh-1 ms-15px">
                            <Link to="/user-login" className="text-white lh-1 text-golden-hover"><i className="bi bi-person-circle m-0"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  );
};

export default Navbar;
