import React, { useEffect} from 'react';
import anime from 'animejs';
import $ from 'jquery';
import 'magnific-popup';

const Profile = () => {

useEffect(() => {
    // Handle anime.js animations
    const elements = document.querySelectorAll('[data-anime]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const animeConfig = JSON.parse(el.getAttribute('data-anime'));
            anime({
            targets: el,
            ...animeConfig,
            });
            observer.unobserve(el);
        }
        });
    });
    elements.forEach(el => {
        observer.observe(el);
    });
    return () => {
        elements.forEach(el => observer.unobserve(el));
    };
}, []);

useEffect(() => {
    $(document).ready(function() {
        $('.open-modal').magnificPopup({
            type: 'inline',
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });
}, []);

   return (
    <>
    <section className="position-relative bg-white">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                <div className="row mb-0">
                    <div className="col text-center">
                        <h2 className="fs-50 text-dark-gray fw-600 ls-minus-1px">My Profile</h2>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center position-relative z-index-1">
                    <div className="col-xl-8 col-md-8">
                        <form action="" method="post" className="row contact-form-style-02 bg-very-light-gray border-radius-10px p-10 pt-5 myform-01">
                            <div className="col-sm-12 mt-10px text-end">
                                <a href="#resetLoginPassword" className="popup-with-move-anim open-modal">
                                <button 
                                    className="btn btn-round-edge bg-blue submit h-30px p-0 ps-5px pe-5px fs-12 m-10px text-white fs-12 fw-600 text-capitalize fin-btn " 
                                    type="button"
                                    
                                >
                                    <span>
                                        <span><i className="bi bi-repeat m-0 align-middle"></i></span>
                                        <span className="btn-double-text"> Reset Login Password</span> 
                                    </span>
                                </button>
                                </a>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Email</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-envelope-at align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="email" name="email" placeholder="jack.miller@gmail.com" disabled="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">First Name</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-person-circle align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="email" name="email" value="Jack" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Last Name</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-person-circle align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="email" name="email" value="Miller" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Company</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-buildings align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="email" name="email" value="Johra Private Limited" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Job Title</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-card-heading align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="email" name="email" value="CFO" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Industry</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="fa fa-industry align-middle fs-20 lh-1"></i>
                                            </span>
                                            <div className="select">
                                                <select className="form-control" name="select" aria-label="select-industry">
                                                    <option value="">Please select</option>
                                                    <option value="Industry1">Industry1</option>
                                                    <option value="Industry2">Industry2</option>
                                                    <option value="Industry3" selected="">Industry3</option>
                                                    <option value="Industry4">Industry4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Country</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-globe align-middle fs-20 lh-1"></i>
                                            </span>
                                            <div className="select">
                                                <select className="form-control" name="select">
                                                    <option value="">Select country of incorporation</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="England">England</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Holy See">Holy See</option>
                                                    <option value="India" selected="">India</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-20px">
                                <div className="row align-items-center">
                                    <div className="col-4 text-end">
                                        <label className="text-black mb-0 fw-600 d-block lh-1">Phone Number</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <span className="input-group-text p-15px border-radius-0px">
                                                <i className="bi bi-telephone align-middle fs-20 lh-1"></i>
                                            </span>
                                            <input className="border-radius-0px bg-white box-shadow form-control" type="text" name="" value="+91 8059487688" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center mt-20px">
                                <input type="hidden" name="redirect" value=""/>
                                <button className="btn btn-large btn-round-edge bg-blue submit text-white w-100 fin-btn" type="submit">
                                    <span>
                                        <span><i className="bi bi-check-circle align-middle"></i></span>
                                        <span className="btn-double-text align-middle">Update Profile</span> 
                                    </span>
                                </button>
                            </div>
                            <div className="col-12">
                                <div className="form-results mt-20px d-none"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</section>
<div id="resetLoginPassword" className="zoom-anim-dialog p-0 contact-form-style-01 position-relative mfp-hide text-center col-xl-4 col-lg-6 col-md-8 col-12 mx-auto text-center">
        <div className="p-30px bg-white">
            <p className="fs-18 fw-600 mb-10">Reset Login Password</p>
            <span className="fs-14 lh-22 d-block mb-15px">Please enter the securty code sent on your email ID</span>
            <form action="" method="post">
                <div className="position-relative form-group mb-20px">
                    <span className="form-icon"><i className="bi bi-chat-square-dots"></i></span>
                    <input type="text" name="name" className="form-control" placeholder="Enter securty code*" />
                </div>
                <div className="position-relative form-group mb-20px">
                    <span className="form-icon"><i className="bi bi-lock"></i></span>
                    <input type="text" name="name" className="form-control" placeholder="Enter new password*" />
                </div>
                <div className="position-relative form-group mb-20px">
                    <span className="form-icon"><i className="bi bi-file-lock"></i></span>
                    <input type="text" name="name" className="form-control" placeholder="Re-enter new password*" />
                </div>
                <div className="position-relative form-group form-textarea">
                    <input type="hidden" name="redirect" value=""/>
                    <button className="btn btn-large btn-round-edge bg-blue submit text-white w-100 fin-btn" type="submit">
                        <span>
                            <span><i className="bi bi-repeat align-middle"></i></span>
                            <span className="btn-double-text align-middle">Reset Login Password</span>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    </div>
    </>
   );
}

export default Profile;