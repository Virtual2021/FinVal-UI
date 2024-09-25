import React, {useState, useEffect} from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';
import CurrentPlan from './CurrentPlan';
import { apiURL } from '../../../config/Config';
import axios from 'axios';

const Upgrade = () => {
    let [currentPlan, setCurrentPlan] = useState(null);
    let [upgradePlan, setUpgradePlan] = useState(null);
    const token = sessionStorage.getItem('token');

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
    const fetchTableData = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios.get(apiURL + '/plan/customer_upgrade_plans', {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        });
        const data = await response;
        if (data.status) {
            setCurrentPlan(data.data.data.current_plan);
            setUpgradePlan(data.data.data.upgrade_data);
        } else {
          console.error('Failed to fetch table data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching table data:', error);
      }
    };

    fetchTableData();
  }, []);

   return (
    <section className="position-relative pt-15px pb-15px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <div className="row align-items-center justify-content-center position-relative z-index-1">
                        <div className="col-md-11">
                            <div className="card mt-15px rounded-bottom-0 border-0 box-shadow">
                                <div className="card-header fw-600 mb-0 align-items-center bg-white text-blue">Upgrade Plan</div>
                                <div className="card-body overflow-hidden ps-15px pe-15px pt-0 pb-0">
                                    {currentPlan && currentPlan.length > 0 ?
                                    <>
                                        <CurrentPlan data={currentPlan[0]}/>
                                        {upgradePlan && upgradePlan.length > 0 ?
                                            <>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <fieldset className="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                                            <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Select one of the available plan options to upgrade</legend>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                                                                    <thead className="border-solid border-1 border-light-blue">
                                                                        <tr>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue w-70px">Select</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">No. of<br/>Reports</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Access<br/>Days</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Plan Price<br/>(USD)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="fs-14 p-0 h-40px">
                                                                                <input className="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio1" value="option1"/>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio1" className="d-block">50</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio1" className="d-block">70</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio1" className="d-block">3,899</label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="bg-light-blue">
                                                                            <td className="fs-14 p-0 h-40px bg-light-blue">
                                                                                <input className="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio2" value="option2" checked/>
                                                                            </td>
                                                                            <td className="fs-14 p-0 bg-light-blue">
                                                                                <label for="inlineRadio2" className="d-block">80</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0 bg-light-blue">
                                                                                <label for="inlineRadio2" className="d-block">90</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0 bg-light-blue">
                                                                                <label for="inlineRadio2" className="d-block">5,999</label>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fs-14 p-0 h-40px">
                                                                                <input className="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue" type="radio" name="companyType" id="inlineRadio3" value="option3"/>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio3" className="d-block">100</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio3" className="d-block">120</label>
                                                                            </td>
                                                                            <td className="fs-14 p-0">
                                                                                <label for="inlineRadio3" className="d-block">6,999</label>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-6">
                                                        <fieldset className="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                                            <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Your current plan gets converted to following</legend>
                                                            <div className="table-responsive">
                                                                <table className="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                                                                    <thead className="border-solid border-1 border-light-blue">
                                                                        <tr>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Total<br/>Reports</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Access<br/>Days</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Expire<br/>Date</th>
                                                                            <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Upgrade Price<br/> to Pay (USD)</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="fs-14 h-40px">32</td>
                                                                            <td className="fs-14">40</td>
                                                                            <td className="fs-14">24-Jul-2024</td>
                                                                            <td className="fs-14">1,500</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fs-14 h-40px bg-light-blue">62</td>
                                                                            <td className="fs-14 bg-light-blue">60</td>
                                                                            <td className="fs-14 bg-light-blue">23-Aug-2024</td>
                                                                            <td className="fs-14 bg-light-blue">3,600</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fs-14 h-40px">82</td>
                                                                            <td className="fs-14">90</td>
                                                                            <td className="fs-14">21-Sep-2024</td>
                                                                            <td className="fs-14">4,600</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12 text-center">
                                                        <Link to="/my-plan" className="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px">
                                                            <i className="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                                                        </Link>&nbsp;
                                                        <Link to="/upgrade-summary" className="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px">
                                                            Continue <i className="feather icon-feather-arrow-right-circle m-0 fs-16 align-text-bottom"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </>
                                            : 
                                            <div className="row mt-25px text-center">
                                                <div className="col-sm-12">
                                                        <p> No Upgrade Option</p>
                                                </div>
                                            </div>
                                        }
                                    </>
                                        : 
                                        <div className="row mt-15px">
                                            <div className="col-sm-12">
                                                    <p> No Active Plan</p>
                                            </div>
                                        </div>
                                    }
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