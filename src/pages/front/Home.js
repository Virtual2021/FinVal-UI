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
import Banner from './Home/Banner';
import BannerFooter from './Home/BannerFooter';
import HowWork from './Home/HowWork';
import Proposal from './Home/Proposal';
import CountriesNumber from './Home/CountriesNumber';
import Join from './Home/Join';

const Home = () => {

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
            <Banner />
            <BannerFooter />   
            <HowWork /> 
            <Proposal/>
            <CountriesNumber />  
            <Join />
            <Testimonial />
        </>
    );
};

export default Home;
