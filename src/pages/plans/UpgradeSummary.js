import React, { useEffect} from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

const UpgradeSummary = () => {
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
  return (
    <section class="position-relative pt-15px pb-15px">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <div class="row align-items-center justify-content-center position-relative z-index-1">
                        <div class="col-md-11">
                            <div class="card mt-15px rounded-bottom-0 border-0 box-shadow">
                                <div class="card-header fw-600 mb-0 align-items-center bg-white text-blue">Upgrade Summary</div>
                                <div class="card-body overflow-hidden ps-15px pe-15px pt-0 pb-0">
                                    <div class="row mt-15px">
                                        <div class="col-sm-12">
                                            <fieldset class="ps-15px pe-15px pb-15px pt-10px d-block" style={{"background":"#f2f3f6"}}>
                                                <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Upgrade Plan Details</legend>
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="pricing-table box-shadow rounded-4 rounded-bottom-0">
                                                            <div class="pricing-header text-center text-golden bg-blue rounded-4 rounded-bottom-0 p-10px d-flex justify-content-between">
                                                                <div class="fw-500 fs-16 lh-1 d-flex align-items-center">
                                                                    <i class="bi bi-box-arrow-up fs-26 me-5px lh-1"></i> You have selected to upgrade your current plan
                                                                </div>
                                                            </div>
                                                            <div class="pricing-body bg-white">
                                                                <ul class="list-style-01 p-0 mb-0">
                                                                    <li class="border-color-transparent-dark-very-light p-10px fs-16" style={{"display": "flex", "alignItems": "flex-start"}}>
                                                                        <i class="bi bi-check2-circle fs-22 fw-700" style={{"color": "rgb(20, 193, 20)", "marginRight": "8px", "marginTop": "-4px"}}></i>
                                                                        <span class="text-start lh-sm">
                                                                            Your current plan ID# 3 will become Inactive and currently unused reports will be transferred to new plan.
                                                                        </span>
                                                                    </li>
                                                                    <li class="border-color-transparent-dark-very-light p-10px fs-16" style={{"display": "flex", "alignItems": "flex-start"}}>
                                                                        <i class="bi bi-check2-circle fs-22 fw-700" style={{"color": "rgb(20, 193, 20)", "marginRight": "8px", "marginTop": "-4px"}}></i>
                                                                        <span class="text-start lh-sm">
                                                                            The details of new plan will be
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-center mt-15px">
                                                    <div class="col-sm-6">
                                                        <div class="border pt-10px pb-10px rounded-4 bg-white h-100">
                                                            <table class="fs-16 fw-400 lh-normal text-end me-auto ms-auto">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="p-5px pt-0 lh-1">Total Reports</td>
                                                                        <td class="center p-5px pt-0 lh-1">:</td>
                                                                        <td class="fw-600 p-5px pt-0 lh-1 text-start">32</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Access days from today</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">40</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Expiry Date</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">24-Jul-3024</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Total amount to pay for upgrade</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">USD 1,500</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <Link href="/upgrade-plan" class="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px">
                                                <i class="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                                            </Link>
                                            <Link to="/my-plan" class="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px border-radius-4px">
                                                Continue to Payment <i class="feather icon-feather-arrow-right-circle m-0 fs-16 align-text-bottom"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>
  );
}

export default UpgradeSummary;