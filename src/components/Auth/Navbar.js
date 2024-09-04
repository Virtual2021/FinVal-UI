import logo from "../../assets/finimg/logo.png";
import goldenlogo from "../../assets/finimg/logo-golden.png";

const Navbar = () => {
  return (
    <>
        <header>
                <nav className="navbar navbar-expand-lg mini-header position-relative">
                    <div className="container-fluid">
                        <div className="col-auto me-lg-0 me-auto">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} data-at2x={logo} alt="" className="default-logo" width="91"
                                    height="30" />
                                <img src={logo} data-at2x={logo} alt="" className="alt-logo" width="0"
                                    height="0" />
                                <img src={goldenlogo} data-at2x={goldenlogo} alt="" className="mobile-logo"
                                    width="0" height="0" />
                            </a>
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
                                    <li className="nav-item"><a href="index.html" className="nav-link">Home</a></li>
                                    <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                                    <li className="nav-item dropdown simple-dropdown">
                                        <a href="#" className="nav-link">Product</a>
                                        <i className="fa-solid fa-angle-down dropdown-toggle" id="navbarDropdownMenuLink_1"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu menu-li-hover" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a href="how-it-works.html" className="text-base-color">How it works</a></li>
                                            <li><a href="#" className="text-base-color">Finance planning</a></li>
                                            <li><a href="#" className="text-base-color">Wealth management</a></li>
                                            <li><a href="#" className="text-base-color">Strategic planning</a></li>
                                            <li><a href="#" className="text-base-color">Audit assurance</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="teams.html" className="nav-link">Team</a></li>
                                    <li className="nav-item"><a href="pricing.html" className="nav-link">Pricing</a></li>
                                    <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-auto text-end d-none d-sm-flex">
                            <div className="header-icon lh-1">
                                <div className="header-button fs-16">Hi, Satish</div>
                            </div>
                            <div className="header-icon lh-1 ms-15px">
                                <li className="nav-item dropdown simple-dropdown list-unstyled">
                                    <a href="javascript:void(0);" className="text-white lh-1 text-golden-hover dropdown-toggle" id="navbarDropdownMenuLink_1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi bi-person-circle m-0"></i>
                                    </a>
                                    <ul className="dropdown-menu end-0 m-0 ps-10px pt-0 pe-10px pb-15px fs-12 box-shadow" aria-labelledby="navbarDropdownMenuLink" style={{ minWidth: '130px'}} >
                                        <li className="mt-15px">
                                            <a href="business-details.html" className="text-golden-hover">
                                                <i class='bi bi-pencil-square me-5px text-blue'></i>New Order
                                            </a>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="my-order.html" className="text-golden-hover">
                                                <i class='bi bi-box-seam me-5px text-blue'></i>My Orders
                                            </a>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="plans-and-billing.html" className="text-golden-hover">
                                                <i class='bi bi-clipboard-check me-5px text-blue'></i>Plans & Billing
                                            </a>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="upgrade-plan.html" className="text-golden-hover">
                                                <i class='bi bi-box-arrow-up me-5px text-blue'></i>Upgrade Plan
                                            </a>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="profile.html" className="text-golden-hover">
                                                <i class='bi bi-person me-5px text-blue'></i>My Profile
                                            </a>
                                        </li>
                                        <div className="divider-style-03 divider-style-03-01 mt-10px mb-10px w-100" style={{borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>
                                        <li className="mt-10px">
                                            <a href="sign-in.html" className="text-golden-hover">
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
