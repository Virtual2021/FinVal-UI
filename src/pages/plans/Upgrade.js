import React, { useEffect} from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';

const Upgrade = () => {

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
                                <div class="card-header fw-600 mb-0 align-items-center bg-white text-blue">Upgrade Plan</div>
                                <div class="card-body overflow-hidden ps-15px pe-15px pt-0 pb-0">
                                    <div class="row mt-15px">
                                        <div class="col-sm-12">
                                            <fieldset class="ps-15px pe-15px pb-15px pt-10px d-block" style={{"background":"#f2f3f6"}}>
                                                <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Current Plan Details</legend>
                                                <div class="row justify-content-center align-items-center">
                                                    <div class="col-sm-12 text-center">
                                                        <div class="pricing-table box-shadow rounded-4 rounded-bottom-0">
                                                            <div class="pricing-header text-center text-golden bg-blue rounded-4 rounded-bottom-0 p-10px d-flex justify-content-between">
                                                                <div class="fw-500 fs-16 lh-1 d-flex align-items-center">
                                                                    <i class="bi bi-box-arrow-up fs-26 me-5px lh-1"></i> Upgrade your current plan
                                                                </div>
                                                            </div>
                                                            <div class="pricing-body bg-white">
                                                                <ul class="list-style-01 p-0 mb-0">
                                                                    <li class="border-color-transparent-dark-very-light p-10px fs-16" style={{"display": "flex", "alignItems": "flex-start"}}>
                                                                        <i class="bi bi-check2-circle fs-22 fw-700" style={{"color": "rgb(20, 193, 20)", "marginRight": "8px", "marginTop": "-4px"}}></i>
                                                                        <span class="text-start lh-sm">
                                                                            Don't let your unutilized reports expire. Add reports and exlent the plan access days.
                                                                        </span>
                                                                    </li>
                                                                    <li class="border-color-transparent-dark-very-light p-10px fs-16" style={{"display": "flex", "alignItems": "flex-start"}}>
                                                                        <i class="bi bi-check2-circle fs-22 fw-700" style={{"color": "rgb(20, 193, 20)", "marginRight": "8px", "marginTop": "-4px"}}></i>
                                                                        <span class="text-start lh-sm">
                                                                            Upgrade to a higher value and reduce your cost per report.
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-center mt-15px">
                                                    <div class="col-sm-4">
                                                        <div class="border pt-10px pb-10px rounded-4 bg-white h-100">
                                                            <table class="fs-16 fw-400 lh-normal text-end me-auto ms-auto">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="p-5px pt-0 lh-1">Plan Id</td>
                                                                        <td class="center p-5px pt-0 lh-1">:</td>
                                                                        <td class="fw-600 p-5px pt-0 lh-1 text-start">3</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Type</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">Advisor</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Order Type</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">New Plan</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Total Amount Paid</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">USD 2,399</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="border xs-mt-15px pt-10px pb-10px rounded-4 bg-white h-100 xs-h-auto d-flex justify-content-center align-items-center">
                                                            <table class="fs-16 fw-400 lh-normal text-end me-auto ms-auto">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Order Date</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">15-May-2024</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Activation Date</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">15-May-2024</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Expire Date</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">New Plan</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="border xs-mt-15px pt-10px pb-10px rounded-4 bg-white h-100 xs-h-auto">
                                                            <table class="fs-16 fw-400 lh-normal text-end me-auto ms-auto">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="p-5px">Number of Reports</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">30</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Access Day</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">50</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Reports Utilized</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">18</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Days Utilized</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">30</td>
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
                                        <div class="col-6">
                                            <fieldset class="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                                <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Select one of the available plan options to upgrade</legend>
                                                <div class="table-responsive">
                                                    <table class="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                                                        <thead class="border-solid border-1 border-light-blue">
                                                            <tr>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue w-70px">Select</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">No. of<br/>Reports</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Access<br/>Days</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Plan Price<br/>(USD)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="fs-14 p-0 h-40px">
                                                                    <input class="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio1" value="option1"/>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio1" class="d-block">50</label>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio1" class="d-block">70</label>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio1" class="d-block">3,899</label>
                                                                </td>
                                                            </tr>
                                                            <tr class="bg-light-blue">
                                                                <td class="fs-14 p-0 h-40px bg-light-blue">
                                                                    <input class="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio2" value="option2" checked/>
                                                                </td>
                                                                <td class="fs-14 p-0 bg-light-blue">
                                                                    <label for="inlineRadio2" class="d-block">80</label>
                                                                </td>
                                                                <td class="fs-14 p-0 bg-light-blue">
                                                                    <label for="inlineRadio2" class="d-block">90</label>
                                                                </td>
                                                                <td class="fs-14 p-0 bg-light-blue">
                                                                    <label for="inlineRadio2" class="d-block">5,999</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-14 p-0 h-40px">
                                                                    <input class="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio3" value="option3"/>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio3" class="d-block">100</label>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio3" class="d-block">120</label>
                                                                </td>
                                                                <td class="fs-14 p-0">
                                                                    <label for="inlineRadio3" class="d-block">6,999</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div class="col-6">
                                            <fieldset class="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                                <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Your current plan gets converted to following</legend>
                                                <div class="table-responsive">
                                                    <table class="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                                                        <thead class="border-solid border-1 border-light-blue">
                                                            <tr>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Total<br/>Reports</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Access<br/>Days</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Expire<br/>Date</th>
                                                                <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Upgrade Price<br/> to Pay (USD)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="fs-14 h-40px">32</td>
                                                                <td class="fs-14">40</td>
                                                                <td class="fs-14">24-Jul-2024</td>
                                                                <td class="fs-14">1,500</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-14 h-40px bg-light-blue">62</td>
                                                                <td class="fs-14 bg-light-blue">60</td>
                                                                <td class="fs-14 bg-light-blue">23-Aug-2024</td>
                                                                <td class="fs-14 bg-light-blue">3,600</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="fs-14 h-40px">82</td>
                                                                <td class="fs-14">90</td>
                                                                <td class="fs-14">21-Sep-2024</td>
                                                                <td class="fs-14">4,600</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <Link to="/my-plan" class="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px">
                                                <i class="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                                            </Link>&nbsp;
                                            <Link to="/upgrade-summary" class="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px">
                                                Continue <i class="feather icon-feather-arrow-right-circle m-0 fs-16 align-text-bottom"></i>
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

export default Upgrade;