import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import banner from '../../assets/finimg/new-abouts-us-banner.png';

const Blog = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100%",
        height: "300px !important"
    };

    const elementRef1 = useRef(null);

    useEffect(() => {
        // Multiple animations
        anime.timeline()
            .add({
                targets: elementRef1.current,
                delay: 100,
                duration: 400,
                stagger: 200, // Stagger effect with delay between each element
                easing: 'easeOutQuad',
                opacity: [0, 1],
                translateY: [30, 0]
            })
    }, []);

    return (
        <>
            <section className="page-title-parallax-background half-section ipad-top-space-margin" style={bannerStyle}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 text-center position-relative page-title-extra-large mt-15px">
                            <div className="d-flex flex-column h-100px">
                                <div className="mt-auto" useRef={elementRef1}>
                                    <h1 className="text-base-color alt-font mb-0 fw-600 ls-minus-1px">Blog</h1>
                                </div>
                                <div className="mt-auto justify-content-center breadcrumb breadcrumb-style-01 alt-font text-white">
                                    <p className="text-base-color">Browse through our articles on topics like valuation, financial projections and fundraising.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="padding-60-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ps-0 pe-0" >
                            <ul className="blog-side-image blog-wrapper grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-2col gutter-extra-large" style={{ position: "relative", height: "1200px" }}>
                                <li className="grid-sizer"></li>
                                <li class="grid-item" style={{ position: "absolute", left: "0%", top: "0px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Business</a>
                                            <div class="heading-box-index">
                                                <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">Creativity is nothing but a mind set free.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "33.33%", top: "0px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Finance</a>
                                            <div class="heading-box-index">
                                            <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">A business needs a successful mix of design.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "66.66%", top: "0px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Business</a>
                                            <div class="heading-box-index">
                                            <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">A dream doesn't become reality through magic.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "0%", top: "380px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Creative</a>
                                            <div class="heading-box-index">
                                                <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">Build up healthy habits and strong peaceful life.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "33.33%", top: "380px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Finance</a>
                                            <div class="heading-box-index">
                                            <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">Everything is design are designed well.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "66.66%", top: "380px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Business</a>
                                            <div class="heading-box-index">
                                            <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">Creative Make it simple, but significant.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                                
                                <li class="grid-item" style={{ position: "absolute", left: "0%", top: "760px" }}>
                                    <div class="blog-box d-md-flex d-block flex-row h-100 border-radius-6px overflow-hidden box-shadow-extra-large">
                                        <div class="blog-content w-100 h-350px sm-w-100 p-3 bg-white d-flex flex-column justify-content-center align-items-start last-paragraph-no-margin">
                                            <a href="/blog-details" class="categories-btn bg-sky-blue text-white text-uppercase fw-500 mb-20px ">Business</a>
                                            <div class="heading-box-index">
                                            <a href="/blog-details" class="d-inline-block alt-font text-base-color fw-600 fs-20 lh-28">Creative Make it simple, but significant.</a>
                                            </div>
                                            
                                            <p class=" gray-text fs-16 lh-28">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text.</p>
                                            <div class="mt-15px"><span style={{ height: "2px", width: "10px" }} class="separator bg-sky-blue"></span><a href="/" class="gray-text text-dark-gray-hover d-inline-block fs-12 fw-500 fw-500 text-uppercase"> AUG 12,2024 | <span class="text-sky-blue">Fin-Valuation</span></a></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-4 d-flex justify-content-center">
                            <ul className="pagination pagination-style-01 fs-13 fw-500 mb-0">
                                <li className="page-item"><a className="page-link" href="/"><i className="feather icon-feather-arrow-left fs-18 d-xs-none"></i></a></li>
                                <li className="page-item active"><a className="page-link" href="/">01</a></li>
                                <li className="page-item "><a className="page-link" href="/">02</a></li>
                                <li className="page-item"><a className="page-link" href="/">03</a></li>
                                <li className="page-item"><a className="page-link" href="/">04</a></li>
                                <li className="page-item"><a className="page-link" href="/"><i className="feather icon-feather-arrow-right fs-18 d-xs-none"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
