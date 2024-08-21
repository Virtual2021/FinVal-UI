import { Link } from 'react-router-dom';
import logo from '../../assets/finimg/logo.png';

const Sidebar = () => {
    const handleLogout = () => {
        sessionStorage.clear(); // Clear all data from sessionStorage
        window.location.href = '/user-login';
    };

    return (
        <div className="mysidebar close hoverOpen">
            <header>
                <div className="image-text d-none">
                    <span className="image">
                        <img src={logo} alt=""/>
                    </span>
                    <div className="text logo-text">
                        <span className="name">FA</span>
                        <span className="profession">FinVal</span>
                    </div>
                </div>
                <i class='bi bi-list mytoggle text-golden-hover bg-dark-blue-hover'></i>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <div className="h-1px w-100 bg-extra-medium-gray mb-50px mt-50px"></div>
                    <ul className="menu-links p-0">
                        <li className="nav-link">
                            <Link to="/valuation-form">
                                <i class='bi bi-box-seam icon' ></i>
                                <span className="text nav-text">My Orders</span>
                            </Link>
                        </li>
                        <li className="nav-link m-0 h-15px justify-content-center gmailtype">
                            <span className="fs-11 white-space-nowrap lh-normal fw-600">Orders</span>
                        </li>
                        <li className="nav-link">
                            <a href="pricing.html">
                                <i class='bi bi-clipboard-check icon'></i>
                                <span className="text nav-text">Plans & Billing</span>
                            </a>
                        </li>
                        <li className="nav-link m-0 h-15px justify-content-center gmailtype">
                            <span className="fs-11 white-space-nowrap lh-normal fw-600">Plans</span>
                        </li>
                        <li className="nav-link">
                            <a href="profile.html">
                                <i class='bi bi-person-circle icon'></i>
                                <span className="text nav-text">Profile</span>
                            </a>
                        </li>
                        <li className="nav-link m-0 h-15px justify-content-center gmailtype">
                            <span className="fs-11 white-space-nowrap lh-normal fw-600">Profile</span>
                        </li>
                    </ul>
                </div>
                <div className="bottom-content mb-5px">
                    <li className="">
                        <a href="#!" onClick={handleLogout} className="logout-button">
                            <i className='bi bi-power icon'></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>
                    <li className="nav-link m-0 h-15px justify-content-center gmailtype">
                        <span className="fs-11 white-space-nowrap lh-normal text-black fw-600">Logout</span>
                    </li>
                </div>
            </div>
    </div>
    );

}

export default Sidebar;