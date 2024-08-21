import React, {useEffect, useState} from "react"
import BusinessDetails from "./BusinessDetails"
import Customer from "./Customer"
import Financial from "./Financial"
import Projections from "./Projections"
import Documents from "./Documents";
import BalanceSheet from "./BalanceSheet";
import anime from 'animejs';
import { useParams, useNavigate  } from "react-router-dom"
import { apiURL } from "../../../config/Config"
import Swal from "sweetalert2";
import axios from "axios"

const Preview = () => {
    const { id } = useParams(); // Extract the ID from the URL
    const [data, setData] = useState(null);
    const token = sessionStorage.getItem('token');
    const navigate = useNavigate();

    const handleSave = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(apiURL + '/order/submit-order', {
                orderId : id,
            },
            {
                headers: {
                    Authorization: `${token}`
                }
            });

            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Order Submitted',
                    text: 'Your order has been successfully submitted!',
                }).then(() => {
                    sessionStorage.removeItem('orderId');
                    navigate('/dashboard'); // Navigate to /dashboard after success
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: response.message || 'Something went wrong',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Something went wrong',
            });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiURL+`/order/preview/${id}`);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    useEffect(() => {
        const elements = document.querySelectorAll('[data-anime]');
        elements.forEach(el => {
            const animeConfig = JSON.parse(el.getAttribute('data-anime'));
            anime({
            targets: el,
            ...animeConfig,
            });
        });
        }, []);

    
    return (
     <section className="position-relative pt-15px pb-15px">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                    <div className="row align-items-center justify-content-center position-relative z-index-1">
                        <div className="col-md-11">
                            <div className="card mt-15px rounded-bottom-0 border-0 box-shadow">
                                <div className="card-header fw-600 mb-0 align-items-center bg-white text-blue">Input Data Preview</div>
                                <div className="card-body overflow-hidden p-30px pt-15px">
                                    
                                    {data && <Customer data={data}/>}

                                    <div className="w-100 divider-style-03 divider-style-03-02 border-color-light-gray mb-30px mt-30px"></div>

                                    {data &&  
                                        <div className="row">
                                            <BusinessDetails data={data}/> 
                                            <Financial data={data}/>
                                        </div>
                                    }
                                    {data &&
                                    <Projections data={data}/>
                                    }
                                    <div className="row mt-30px">
                                        <BalanceSheet data={data}/>
                                        <Documents />
                                    </div>

                                    <form action="" method="post" className="row contact-form-style-04 myform mt-30px">
                                        <div className="col-sm-12 text-center">
                                            <a href="balance-sheet-assumptions.html" className="bg-blue h-40px p-5px ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px">
                                                <i className="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                                            </a>
                                            <button onClick={handleSave} className="bg-blue h-40px p-5px ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px">
                                                <i className="feather icon-feather-check-circle m-0 fs-16 align-text-bottom"></i> Submit Report Order
                                            </button>
                                        </div>
                                    </form>
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

export default Preview;