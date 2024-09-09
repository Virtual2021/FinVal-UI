import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import banner from '../../assets/finimg/banner-without-text-final.png';
import banner_change from '../../assets/finimg/bannner-animate-change2.png';
import poster from '../../assets/finimg/poster.png';
import blog_1 from '../../assets/finimg/money-time-effort.jpg';
import blog_2 from '../../assets/finimg/businessmen-elegant-suits-business-meeting-discussing-new-project-office.jpg';
import blog_3 from '../../assets/finimg/customized-valuation-approach.jpg';
import blog_4 from '../../assets/finimg/curated-with-personal-touch.jpg';
import blog_5 from '../../assets/finimg/pay-less.jpg';
import blog_6 from '../../assets/finimg/people-office.jpg';
import laptop from '../../assets/finimg/laptop.png';
import Testimonial from './Testimonial';

const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${banner})`
    };

    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);
    const elementRef3 = useRef(null);
    const elementRef4 = useRef(null);
    const elementRef5 = useRef(null);
    const elementRef6 = useRef(null);
    const elementRef7 = useRef(null);
    const elementRef8 = useRef(null);

    useEffect(() => {
        // Multiple animations
        anime.timeline()
            .add({
                targets: elementRef1.current,
                delay: 0,
                duration: 700,
                stagger: 300, // Stagger effect with delay between each element
                easing: 'easeOutQuad',
                opacity: [1, 1],
                translateY: [0, 0]
            })
            .add({
                targets: elementRef2.current,
                delay: 200,
                duration: 7000,
                stagger: 300, // Stagger effect with delay between each element
                easing: 'easeOutQuad',
                opacity: [1, 1],
                translateY: [0, 0]
            })
            .add({
                targets: elementRef3.current,
                delay: 200,
                duration: 500,
                easing: 'easeOutQuad',
                opacity: [0, 1],
            })
            .add({
                targets: elementRef4.current,
                delay: 0,
                duration: 1000,
                easing: 'easeOutQuad',
                opacity: [0, 1],
                willchange: "transform",
                perspective: [1200, 1200],
                translateY: [0, 0],
                scale: [1.1, 1],
                rotateX: [30, 0],
                stagger: 300
            })
            .add({
                targets: elementRef5.current,
                delay: 0,
                duration: 800,
                easing: 'easeOutQuad',
                opacity: [0, 1],
                translateX: [50, 0],
                stagger: 200
            })
            .add({
                targets: elementRef6.current,
                delay: 0,
                duration: 600,
                easing: 'easeOutQuad',
                opacity: [0, 1],
                stagger: 300
            })
            .add({
                targets: elementRef7.current,
                delay: 0,
                duration: 600,
                easing: 'easeOutQuad',
                opacity: [0, 1],
                stagger: 300,
                translateY: [30, 0]
            })
            .add({
                targets: elementRef8.current,
                delay: 100,
                duration: 600,
                easing: 'easeOutQuad',
                opacity: [0, 1],
                stagger: 150,
                translate: [0, 0]
            })
    }, []);

    return (
        <>
            <section className="p-0">
                <div className="swiper full-screen md-h-450px sm-h-450px ipad-top-space-margin swiper-light-pagination swiper-pagination-style-3 drag-cursor" style={{ height: "70vh" }}
                    data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-pagination-bullets", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "stopOnLastSlide": true, "disableOnInteraction": false },"keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "fade" }'>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={bannerStyle} useRef={elementRef1}> </div>
                            <div className="opacity-light "></div>
                            <div className="container h-100 w-100">
                                <div className="row align-items-center h-100 w-100 justify-content-left mt-1 ">
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 position-relative  p-0">
                                        <div className="d-inline-block position-relative mb-35px" useRef={elementRef3}>
                                            <h2 className="d-inline-block fw-400 text-base-color mb-0 fs-55">Calculate a fair valuation for your <span className="text-golden-color fw-600">Startup</span></h2>
                                        </div>

                                        <a href="/" className="btn btn-box-shadow btn-large banner-btn-1 btn-round-edge fw-700" style={{ marginRight: "10px" }} useRef={elementRef3}><i className="feather icon-feather-video"></i> Watch Video</a>
                                        <a href="/" className="btn btn-box-shadow btn-large banner-btn-1 btn-round-edge fw-700" useRef={elementRef3}><i className="feather icon-feather-shopping-bag"></i> Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="position-absolute left-0px top-0px w-100 h-100 cover-background" style={bannerStyle} useRef={elementRef2}></div>
                            <div className="opacity-light "></div>
                            <div className="container h-100 w-100">
                                <div className="row align-items-center h-100 w-100 justify-content-left mt-1 ">
                                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 position-relative  p-0">
                                        <div className="d-inline-block position-relative mb-35px" useRef={elementRef3}>
                                            <h2 className="d-inline-block fw-400 text-base-color fs-55 mb-0">Industry leading methodology for <span className="text-sky-blue fw-600">Startup Valuation</span></h2>
                                        </div>
                                        <a href="/" className="btn btn-box-shadow btn-large banner-btn btn-round-edge fw-700" style={{ marginLeft: "5px" }} useRef={elementRef3}>
                                            <i className="feather icon-feather-video"></i> Watch Video</a>
                                        <a href="/" className="btn btn-box-shadow btn-large banner-btn btn-round-edge fw-700" useRef={elementRef3}>
                                            <i className="feather icon-feather-shopping-bag"></i> Buy now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets d-block d-sm-none"></div>
                    </div>
                </div>
            </section>

            <section className="big-section overflow-visible cover-background sm-background-image-none" style={{ backgroundColor: "#fff", paddingBottom: "60px", paddingTop: "110px", zIndex: "1000" }}>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 justify-content-center z-index-1" style={{ marginTop: "-120px", zIndex: "2000" }} useRef={elementRef4}>
                        <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                            <div className="feature-box bg-white h-100 justify-content-start p-15 pe-10px ps-10px lg-p-15 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-5px box-shadow-new">
                                <div className="feature-box-icon feature-box-icon-rounded mx-auto fs-24 fw-500">
                                    <i className="line-icon-Money-Bag fs-45 fw-600" style={{ color: "#4ea8f6", marginBottom: "2px" }}></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="d-inline-block alt-font fs-22 fw-600 mb-5px text-base-color">Save Money</span>
                                    <p className="mb-0 fs-16" style={{ color: "#787777" }}>Traditional Cost: US$10,000 <br />per valuation.<br />
                                        Our Platform Cost: US$109 <br />per valuation.</p>
                                </div>
                                <div className="feature-box-overlay bg-white border-radius-6px"></div>
                            </div>
                        </div>

                        <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
                            <div className="feature-box bg-white h-100 justify-content-start p-15 pe-10px ps-10px lg-p-15 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-5px box-shadow-new">
                                <div className="feature-box-icon feature-box-icon-rounded mx-auto fs-24 fw-500">
                                    <i className="line-icon-Computer-Secure fs-45 fw-600" style={{ color: "#4ea8f6" }}></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="d-inline-block alt-font fs-22 fw-600 mb-5px text-base-color">Privacy</span>
                                    <p className="mb-0 fs-16" style={{ color: "#787777" }}>Our topmost priority is your privacy we don't share or divulge your information.</p>
                                </div>
                                <div className="feature-box-overlay bg-white border-radius-6px"></div>
                            </div>
                        </div>

                        <div className="col icon-with-text-style-04 transition-inner-all">
                            <div className="feature-box bg-white h-100 justify-content-start p-15 pe-10px ps-10px lg-p-15 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-5px box-shadow-new">
                                <div className="feature-box-icon feature-box-icon-rounded mx-auto  fs-24  fw-500">
                                    <i className="line-icon-Handshake fs-45 fw-600" style={{ color: "#4ea8f6" }}></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="d-inline-block alt-font fs-22 fw-600 mb-5px text-base-color">Reliable</span>
                                    <p className="mb-0 fs-16" style={{ color: "#787777" }}>Curated with care by our valuation experts and data scientists.</p>
                                </div>
                                <div className="feature-box-overlay bg-white border-radius-6px"></div>
                            </div>
                        </div>

                        <div className="col icon-with-text-style-04 transition-inner-all">
                            <div className="feature-box bg-white h-100 justify-content-start p-15 pe-10px ps-10px lg-p-15 box-shadow-quadruple-large box-shadow-quadruple-large-hover border-radius-5px box-shadow-new">
                                <div className="feature-box-icon feature-box-icon-rounded mx-auto fs-24 fw-500">
                                    <i className="line-icon-Support fs-45 fw-700" style={{ color: "#4ea8f6" }}></i>
                                </div>
                                <div className="feature-box-content">
                                    <span className="d-inline-block alt-font fs-22  fw-600 mb-5px text-base-color">Support</span>
                                    <p className="mb-0 fs-16" style={{ color: "#787777" }}>Get in touch if you need any assistance! We will be pleased to serve you.</p>
                                </div>
                                <div className="feature-box-overlay bg-white border-radius-6px"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row " style={{ paddingTop: "60px" }}>
                        <div className="col-xl-8 col-lg-7 col-md-7 margin-8px" useRef={elementRef5}>
                            <h2 className="alt-font fw-600 ls-minus-2px text-base-color mb-2">Our Valuation<span style={{ color: "#4ea8f6" }}> Platform</span></h2>
                            <div className="mb-3">
                                <div className="col icon-with-text-style-08 mb-10px">
                                    <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                                        <div className="feature-box-content">
                                            <span className="w-90 md-w-90 sm-w-90 xs-w-100 d-block lh-28 fs-16 margin-8px" style={{ color: "#787777" }}>Here's how to utilize the accessible valuation platform
                                                from FinVal to receive reliable outputs.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col icon-with-text-style-08">
                                    <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                                        <div className="feature-box-content">
                                            <span className="w-90 md-w-90 sm-w-90 xs-w-100 d-block lh-28 fs-16 margin-8px" style={{ color: "#787777" }}>It's
                                                as easy as filling out a form, and can use it frequently to learn more about
                                                your company and entice investors.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-inline-block">
                                <a href="/" className="btn btn-large  btn-box-shadow fw-400 me-35px sm-me-25px btn-round-edge" style={{ color: "white", backgroundColor: "#4ea8f6" }}>About company</a>
                                <a href="/" className="btn btn-link btn-extra-large thin xs-mt-15px xs-mb-15px" style={{ color: "#4ea8f6" }}>How we <span>work</span></a>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4" useRef={elementRef5}>
                            <img src={banner_change} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="big-section padding-60-60">
                <div className="container text-center">
                    <h2 className="alt-font fw-600 ls-minus-2px text-base-color mb-2 margin-8px">How We <span style={{ color: "#4ea8f6" }}>Work</span></h2>
                    <div className="row g-0 position-relative z-index-1 d-flex justify-content-center align-items-center" style={{ objectFit: "contain" }}>
                        <div className="col-10 position-relative  border-radius-6px h-550px lg-h-450px md-h-400px d-flex align-items-center justify-content-center" style={{ objectFit: "contain" }}>
                            <video muted className="video-bg html-video border-radius-6px video-play-icon" poster={poster}>
                                <source type="video/mp4" src="video/video.mp4" />
                                <source type="video/webm" src="video/video.webm" />
                            </video>
                            <a href="/" className="html-video-play video-icon-box video-icon-extra-large position-relative">
                            </a>
                        </div>
                    </div>
                    <div className="row row-cols-1 justify-content-center">
                        <div className="col btn-dual text-center mt-3">
                            <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block lg-mb-15px md-mx-auto" style={{ backgroundColor: "#4ea8f6", color: "white" }}>Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-very-light-gray overflow-hidden big-section padding-60-60">
                <div className="container">
                    <div className="row justify-content-center margin-8px">
                        <div className="col-lg-7 text-center" useRef={elementRef2}>
                            <span className="fs-16 d-inline-block fw-500 text-uppercase  ls-1px" style={{ color: "#787777" }}>to assist you</span>
                            <h2 className="alt-font  fw-600 ls-minus-1px text-base-color mb-2 margin-8px">How we <span style={{ color: "#4ea8f6" }}>propose</span></h2>
                        </div>
                    </div>

                    <div className="row appear anime-complete" useRef={elementRef2}>
                        <div className="col-12 filter-content p-md-0">
                            <ul className="portfolio-wrapper grid grid-3col xxl-grid-3col xl-grid-3col lg-grid-2col md-grid-2col sm-grid-1col xs-grid-1col gutter-extra-large" style={{ position: "relative", height: "1023.58px" }}>
                                <li className="grid-sizer"></li>
                                <li className="grid-item design transition-inner-all pt-0" style={{ position: "absolute", left: "0%", top: "0px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_1} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>

                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className="mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color fw-600 mb-2  fs-18 lh-28">Value Your Business in Just 24 Hours</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>Fill out the requested
                                                        information in the valuation dashboard, and you'll get intuitive results in a professional report in less than a day.</p>
                                                </div>
                                            </div>
                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto "
                                                    style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="grid-item development business marketing transition-inner-all pt-0" style={{ position: "absolute", left: "66.6593%", top: "523.792px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_2} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>
                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className=" mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color   fw-600 mb-2  fs-18 lh-28">Benchmark Your Company</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>Benchmark the valuation
                                                        multiples with other companies in similar industries to extract a reliable market value for your business.</p>
                                                </div>
                                            </div>
                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto "
                                                    style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="grid-item development marketing transition-inner-all pt-0" style={{ position: "absolute", left: "66.6593%", top: "0px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_3} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>

                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className=" mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color   fw-600 mb-2  fs-18 lh-28">Customized Valuation Approach</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>While most of the
                                                        valuation portals are using DCF only approach, we employ a weighted average approach that includes results of DCF and Relative Valuation.</p>
                                                </div>
                                            </div>
                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto " style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="grid-item business marketing transition-inner-all" style={{ position: "absolute", left: "33.3296%", top: "-15px", paddingBottom: "0px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_4} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>

                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className=" mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color   fw-600 mb-2  fs-18 lh-28">Curated with Personal Touch</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>We combine Business
                                                        Intelligence with Human Intelligence to offer trusted and customized valuation reports that are specific to your business.</p>
                                                </div>
                                            </div>
                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto "
                                                    style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="grid-item business design transition-inner-all" style={{ position: "absolute", left: "0%", top: "511.792px", paddingBottom: "0px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_5} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>

                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className=" mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color   fw-600 mb-2  fs-18 lh-28">Pay Less</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>No need to spend heavily
                                                        for your company valuation and put in hours and hours of human efforts to value your business.</p>
                                                </div>
                                            </div>

                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto "
                                                    style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li className="grid-item development design transition-inner-all" style={{ position: "absolute", left: "33.3296%", top: "511.792px", paddingBottom: "0px" }}>
                                    <div className="services-box-style-06 border-radius-6px hover-box overflow-hidden box-shadow-large">
                                        <div className="image">
                                            <a href="/">
                                                <img src={blog_6} alt="" data-no-retina="" style={{ height: "200px", objectFit: "cover" }} />
                                            </a>
                                        </div>

                                        <div className="bg-white position-relative" style={{ height: "260px" }}>
                                            <div style={{ padding: "15px" }}>
                                                <div className=" mb-5px">
                                                    <div className="heading-box-index">
                                                        <a href="/" className="d-inline-block alt-font text-base-color   fw-600 mb-2  fs-18 lh-28">Reliable Data Sources</a>
                                                    </div>

                                                    <p className="sm-mb-15px fs-16 lh-28" style={{ color: "#787777" }}>Data used to source
                                                        valuation multiples and other vital parameters is extracted from trusted and reliable sources.</p>
                                                </div>
                                            </div>

                                            <div style={{ position: "absolute", bottom: "10px", left: "30%" }}>
                                                <a href="/" className="btn btn-box-shadow btn-large btn-round-edge d-table d-lg-inline-block  md-mx-auto "
                                                    style={{ backgroundColor: "#4ea8f6", color: "white", padding: "12px" }}>LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="big-section overflow-hidden bg-white padding-60-60" >
                <div className="container">
                    <div className="row pb-60px">
                        <div className="col-md-12 text-center text-md-start" useRef={elementRef6}>
                            <div className="fs-70 xxl-fs-55 sm-fs-45 fw-600  alt-font ls-minus-4px sm-ls-minus-2px text-base-color margin-7px" data-bottom-top="transform: translate3d(-50px, 0px, 0px);" data-top-bottom="transform: translate3d(50px, 0px, 0px);">100+ Countries</div>
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center align-items-lg-end" data-bottom-top="transform: translate3d(-30px, 0px, 0px);" data-top-bottom="transform: translate3d(30px, 0px, 0px);">
                                <div className="col-lg-3 col-md-4 text-md-end text-center md-mt-30px md-mb-20px" useRef={elementRef6}>
                                    <div className="position-relative">
                                        <img src="images/demo-branding-agency-about-01.png" className="animation-rotation" alt="" />
                                        <div className="absolute-middle-center w-100 z-index-minus-1">
                                            <img src="images/demo-branding-agency-about-02.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 text-center text-md-start" useRef={elementRef6}>
                                    <div className="fs-55 xxl-fs-50 sm-fs-40 fw-600  alt-font ls-minus-4px sm-ls-minus-2px margin-7px" style={{ color: "#4ea8f6" }}>Use our</div>
                                </div>
                                <div className="col-lg-5 last-paragraph-no-margin md-mt-30px" useRef={elementRef6}>
                                    <p className="w-95 md-w-80 mx-auto text-center text-lg-start sm-w-100 fs-16 lh-28" style={{ color: "#787777" }}>FinVal Online Valuation Portal in 100+ Countries and value your business at any time</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-0 counter-style-04" useRef={elementRef7}>
                        <div className="col-lg-3 col-md-6 feature-box text-start hover-box border-start sm-border border-color-extra-medium-gray ps-35px pe-35px pt-25px pb-25px lg-ps-25px lg-pe-25px md-ps-35px md-pe-35px md-mb-50px sm-mb-30px">
                            <div className="feature-box-content">
                                <p className=" fw-600 w-90 fs-17 lh-28" style={{ color: "#787777" }}>North America</p>
                                <h2 className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-2 mb-0 ls-minus-1px" data-text=" " data-to="8500"><sup className="text-jade top-0">
                                    <i className="feather icon-feather-arrow-up icon-extra-large" style={{ color: "#4ea8f6" }}></i></sup>8500
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-box text-start hover-box border-start sm-border border-color-extra-medium-gray md-border-end ps-35px pe-35px pt-25px pb-25px lg-ps-25px lg-pe-25px md-mb-50px sm-mb-30px">
                            <div className="feature-box-content">
                                <p className="fw-600 w-90 fs-17 lh-28" style={{ color: "#787777" }}>Europe</p>
                                <h2 className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-2 mb-0 ls-minus-1px" data-text=" " data-to="660"><sup className="text-jade top-0">
                                    <i className="feather icon-feather-arrow-up icon-extra-large" style={{ color: "#4ea8f6" }}></i></sup>660
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-box text-start hover-box border-start sm-border border-color-extra-medium-gray ps-35px pe-35px pt-25px pb-25px lg-ps-25px lg-pe-25px sm-mb-30px">
                            <div className="feature-box-content">
                                <p className=" fw-600 w-90 fs-17 lh-28" style={{ color: "#787777" }}>Middle East</p>
                                <h2 className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-2 mb-0 ls-minus-1px" data-text=" " data-to="6834"><sup className="text-jade top-0">
                                    <i className="feather icon-feather-arrow-up icon-extra-large" style={{ color: "#4ea8f6" }}></i></sup>6834
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 feature-box text-start hover-box border-start sm-border border-color-extra-medium-gray md-border-end ps-35px pe-35px pt-25px pb-25px lg-ps-25px lg-pe-25px">
                            <div className="feature-box-content">
                                <p className="fw-600 w-90 fs-17 lh-28" style={{ color: "#787777" }}>Asia</p>
                                <h2 className="vertical-counter d-inline-flex text-dark-gray fw-700 ls-minus-2px mt-2 mb-0 ls-minus-1px"
                                    data-text=" " data-to="38"><sup className="text-jade top-0">
                                        <i className="feather icon-feather-arrow-up icon-extra-large" style={{ color: "#4ea8f6" }}></i></sup>38
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="big-section pt-60px" style={{ paddingBottom: "100px" }}>
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-6 md-mb-15 xs-mb-22 position-relative" useRef={elementRef6}>
                            <div className="overflow-hidden position-relative">
                                <img className="w-100" src={laptop} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-9 text-center text-lg-start" useRef={elementRef8}>
                            <h2 className="alt-font fw-600  ls-minus-1px text-base-color lh-50 margin-8px" >Our valuation platform will save you hard-earned &nbsp;<span className="mb-0 mx-auto " style={{ color: "#4ea8f6" }} data-fancy-text='{ "effect": "wave", "direction": "up", "string": [ "money", " time", "effort" ], "duration": 2000 }'></span></h2>
                            <p className="w-95 md-w-100 fs-16 lh-28" style={{ color: "#787777" }}>This is how we propose to assist you in effectively assessing your company. It's as easy as filling out a form, and can use it frequently to learn more about your company and entice investors.</p>
                            <a href="/" className="btn btn-large btn-box-shadow fw-400 btn-round-edge" style={{ backgroundColor: "#4ea8f6", color: "white", padding: "14px 30px" }}>Joining with us</a>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />
        </>
    );
};

export default Home;
