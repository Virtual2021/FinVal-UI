import React, { useEffect, useState } from 'react';
import Company from "./form/Company";
import anime from 'animejs';
import FinancialInfo from './form/FinancialInfo';
import ForecastInfo from './form/ForecastInfo';
import BalanceSheet from './form/BalanceSheet';
import './ValuationForm.css';
import axios from 'axios';
import { apiURL } from '../../config/Config';
import GraphElements from './Graph/GraphElements';

const ValuationForm = () => {
    
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({}); // to store form data
    const [isLoading, setIsLoading] = useState(false); // loading state
    const [companyData, setCompanyData] = useState({
        companyName: '',
        industryType: '',
        companyAge: ''
      });

    const fetchOrderData = async () => {
        const orderId = sessionStorage.getItem('orderId');
        if (orderId) {
            setIsLoading(true); // set loading to true
            try {
                const response = await axios.get(`${apiURL}/order/preview/${orderId}`);
                if (response.status === 200) {
                    setFormData(response.data);
                    setCurrentStep(1); // Move to step 1 if data exists
                }
            } catch (error) {
                console.error('Error fetching company data:', error);
            } finally {
                setIsLoading(false); // set loading to false when done
            }
        }
    };

    useEffect(() => {
        fetchOrderData();
    }, []);

    const handleSaveAndFetch = async (nextStep) => {
        // Call the save function or logic here
        // You need to implement save logic or pass it as props to the form components

        await fetchOrderData(); // Re-fetch the data

        setCurrentStep(nextStep); // Move to the next step
    };

const handleFieldBlur = (fieldName, value) => {
    setCompanyData(prevData => ({
      ...prevData,
      [fieldName]: value
    }));
  };

    const renderStep = () => {
        if (isLoading) {
            return <div>Loading...</div>; // Display loading indicator
        }

        switch (currentStep) {
            case 0:
                return <Company onSave={() => handleSaveAndFetch(1)} initialData={formData} onFieldBlur={handleFieldBlur}/>;
            case 1:
                return <FinancialInfo onSave={() => handleSaveAndFetch(2)} initialData={formData} backButton={() => setCurrentStep(0)} />;
            case 2:
                return <ForecastInfo onSave={() => handleSaveAndFetch(3)} initialData={formData} backButton={() => setCurrentStep(1)} />;
            case 3:
                return <BalanceSheet onSave={() => handleSaveAndFetch(0)} initialData={formData} backButton={() => setCurrentStep(2)} />;
            default:
                return <Company onSave={() => handleSaveAndFetch(1)} initialData={formData} />;
        }
      };

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
     <>
        <section className="position-relative p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 order-1 order-lg-2 md-mb-50px" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                        <div className="row">
                            <div className="col-sm-5 bg-light-blue ps-15px pe-15px">
                                {renderStep()}
                            </div>
                            <div className="col-sm-7">
                                <GraphElements data={companyData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        <div className="scroll-progress d-none d-xxl-block">
            <a href="#" className="scroll-top" aria-label="scroll">
                <span className="scroll-text">Scroll</span><span className="scroll-line"><span className="scroll-point"></span></span>
            </a>
        </div>
     </>
   );
}

export default ValuationForm;
