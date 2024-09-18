import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Assuming axios is used for API calls
import { apiURL } from '../../config/Config';
import { formatDate } from '../../common/dateUtils';

const New = () => {

    const [currentplanData, setCurrentPlanData] = useState(null); // State to store plan data
    const [historyplanData, setHistoryPlanData] = useState(null); // State to store plan data
    const [contentArray, setContentArray] = useState([]);
    // const [loading, setLoading] = useState(true); // State to manage loading
    // const [error, setError] = useState(null); // State to handle any errors
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        // Fetch plan data from API
        const fetchPlanData = async () => {
            const token = sessionStorage.getItem('token');
            
            try {
                const response = await axios.get(apiURL + '/plan/customer_plans', {
                    headers: {
                        Authorization: `${token}`, 
                        'Content-Type': 'application/json',
                    },
                });
                const data = response.data;
                if (data.status) {
                    setCurrentPlanData(data.data.current_plan[0]);
                    setHistoryPlanData(data.data.old_plan);
                    if (data.data.current_plan[0] && data.data.current_plan[0].planId && data.data.current_plan[0].planId.description) {
                        const parsedArray = parseHtmlList(data.data.current_plan[0].planId.userplandescription);
                        setContentArray(parsedArray);
                    }
                } else {
                    setCurrentPlanData(null); // No active plan
                    setHistoryPlanData(null);
                }
            } catch (err) {
                console.error("Error fetching plan data:", err);
                // Handle error appropriately here
            }
        };

        fetchPlanData();

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

    const parseHtmlList = (htmlString) => {
        const convertString =  htmlString
          .replace("<ul>", "")
          .replace("</ul>", "")
          .split("</li><li>")
          .map((item) => item.replace("<li>", "").replace("</li>", ""));
        return convertString;  
      };
      

    // Display loading or error states
    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

   return (
    <section class="position-relative pt-15px pb-15px">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <div class="row align-items-center justify-content-center position-relative z-index-1">
                        <div class="col-md-11">
                            <div class="card mt-15px rounded-bottom-0 border-0 box-shadow">
                                <div class="card-header fw-600 mb-0 align-items-center bg-white text-blue">Plans & Billings</div>
                                <div class="card-body overflow-hidden ps-15px pe-15px pt-0 pb-0">
                                    <div class="row mt-15px">
                                        <div class="col-sm-12">
                                            <fieldset class="ps-15px pe-15px pb-15px pt-10px d-block" style={{"background":"#f2f3f6"}}>
                                                <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Current Plan</legend>
                                                <div class="row justify-content-center">
                                                    <div class="col-sm-5 d-flex">
                                                        <div class="border pt-30px pb-30px rounded-4 bg-white d-flex align-items-center justify-content-center w-100">
                                                            <table class="fs-16 fw-400 lh-normal text-end me-auto ms-auto">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="ps-5px pb-5px pe-5px pt-0 lh-1">Plan Id</td>
                                                                        <td class="center ps-5px pb-5px pe-5px pt-0 lh-1">:</td>
                                                                        <td class="fw-600 ps-5px pb-5px pe-5px pt-0 lh-1 text-start">{currentplanData && currentplanData.planId ? currentplanData.planId.sequenceId : "N/A"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Number of Reports</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">{currentplanData && currentplanData.planId ? currentplanData.planId.reports : "N/A"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Reports currently unutilized</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">{currentplanData && currentplanData.planId ? currentplanData.planId.reports : "N/A"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Type</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">{currentplanData && currentplanData.planId ? currentplanData.planId.planType : "N/A"}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="p-5px">Plan Expiry Date</td>
                                                                        <td class="center p-5px">:</td>
                                                                        <td class="fw-600 p-5px text-start">{currentplanData && currentplanData.planId ? formatDate(currentplanData.expiresAt) : "N/A"}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-7 text-center d-flex">
                                                        <div class="pricing-table box-shadow rounded-4 rounded-bottom-0">
                                                            <div class="pricing-header text-center text-golden bg-blue rounded-4 rounded-bottom-0 p-10px d-flex justify-content-between">
                                                                <div class="fw-500 fs-16 lh-1 d-flex align-items-center">
                                                                    <i class="line-icon-Wacom-Tablet fs-26 me-5px lh-1"></i> Plan Includes
                                                                </div>
                                                                <Link to="/upgrade-plan" class="fs-12 lh-1 pt-10px pb-10px text-blue fs-12 fw-500 text-capitalize d-inline-block ls-05px w-130px text-center bg-golden bg-light-golden-hover border-radius-4px"><i class="bi bi-box-arrow-up fs-14"></i> Upgrade Plan</Link>
                                                            </div>
                                                            <div class="pricing-body bg-white">
                                                                <ul class="list-style-01 p-0 mb-0">
                                                                {contentArray.map((item, index) => (
                                                                    <li class="border-color-transparent-dark-very-light p-10px fs-16" style={{"display": "flex", "alignItems": "flex-start"}}>
                                                                        <i class="bi bi-check2-circle fs-22 fw-700" style={{"color": "rgb(20, 193, 20)", "marginRight": "8px", "marginTop": "-4px"}}></i>
                                                                        <span class="text-start lh-sm">
                                                                            {item}
                                                                        </span>
                                                                    </li>
                                                                ))}
                                                                    {/* {currentplanData.planId.description} */}
                                                                    
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <fieldset class="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                        <legend class="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Order History</legend>
                                        <div class="table-responsive">
                                            {historyplanData ?
                                            <table class="table table-striped table-bordered fs-14 lh-normal mytable border-light-blue align-middle text-center">
                                                <thead class="border-solid border-1 border-light-blue">
                                                    <tr>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Order Date</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Plan Type</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Plan ID</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Order Type</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">#Reports<br/>Added</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">Access<br/>Days</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">#Reports<br/>Utilized</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Plan Expire Date</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-80px">Status</th>
                                                        <th scope="col" class="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="fs-14">01-Feb-2024</td>
                                                        <td class="fs-14">Advisor</td>
                                                        <td class="fs-14">1</td>
                                                        <td class="fs-14">New Plan</td>
                                                        <td class="fs-14">30</td>
                                                        <td class="fs-14">50</td>
                                                        <td class="fs-14">27</td>
                                                        <td class="fs-14">22-Mar-2024</td>
                                                        <td class="fs-14">Expired</td>
                                                        <td class="fs-14"><a href="#" class="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i class="bi bi-file-earmark-pdf"></i> Invoice</a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            : "No Order History" }
                                        </div>
                                    </fieldset>
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

export default New;