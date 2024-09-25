import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Assuming axios is used for API calls
import { apiURL } from '../../config/Config';
import { formatDate } from '../../common/dateUtils';
import PlanHistory from './PlanHistory';
import Loader from '../../common/Loader';

const New = () => {

    const [currentplanData, setCurrentPlanData] = useState(null); // State to store plan data
    const [historyplanData, setHistoryPlanData] = useState(null); // State to store plan data
    const [contentArray, setContentArray] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading
    const token = localStorage.getItem('token');

    useEffect(() => {
        // Fetch plan data from API
        const fetchPlanData = async () => {
            setLoading(true); // Show loader
            try {
                const response = await axios.get(apiURL + '/plan/customer_plans', {
                    headers: {
                        Authorization: `${token}`
                    },
                });
                const data = response.data;
                if (data.status) {
                    setCurrentPlanData(data.data.current_plan[0]);
                    setHistoryPlanData(data.data.old_plans);
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
            } finally {
                setLoading(false); // Hide loader
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

   return (
    <section className="position-relative pt-15px pb-15px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                {loading ? (
                    <Loader /> // Loader shown while fetching data
                ) : (
                    <div className="row align-items-center justify-content-center position-relative z-index-1">
                        <div className="col-md-11">
                            <div className="card mt-15px rounded-bottom-0 border-0 box-shadow">
                                <div className="card-header fw-600 mb-0 align-items-center bg-white text-blue">Plans & Billings</div>
                                <div className="card-body overflow-hidden ps-15px pe-15px pt-0 pb-0">
                                    <div className="row mt-15px">
                                        <div className="col-sm-12">
                                            <fieldset className="ps-15px pe-15px pb-15px pt-10px d-block" style={{"background":"#f2f3f6"}}>
                                                <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Current Plan</legend>
                                                 <p> No Active Plan</p>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <fieldset className="ps-15px pe-15px pt-10px mt-15px mb-15px">
                                        <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0">Order History</legend>
                                        <div className="table-responsive">
                                            {historyplanData ?
                                              <PlanHistory data={historyplanData}/>
                                            : "No Order History" }
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>                
                )}
                </div>
            </div>
        </div> 
    </section>
   );
}

export default New;