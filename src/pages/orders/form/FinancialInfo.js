import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../config/Config';
import {formatFrontNumber} from "../../../common/numberUtils";

const FinancialInfo = ({ onSave, initialData ,backButton }) => {
    const [isLoading, setIsLoading] = useState(false);
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    
  const [formData, setFormData] = useState({
    financedata: {
        dataYear : previousYear,
        sales: '0.00',
        costOfSales: '0.00',
        ebitda: '0.00',
        depreciation: '0.00',
        interestExpense: '0.00',
        netProfit: '0.00',
        cashBalance: '0.00',
        debtLoan: '0.00',
        equity: '0.00',
        receivables: '0.00',
        inventories: '0.00',
        payables: '0.00',
        netFixedAssets: '0.00',
        valueType : 'Millions',
    },
    FinYrEnd : previousYear,
    orderId : sessionStorage.getItem('orderId')
  });

  useEffect(() => {
    if (initialData?.calculations?.finance) {
        const financeData = initialData.calculations.finance;

        // Update formData with values from initialData
        setFormData(prevState => ({
            ...prevState,
            financedata: {
                dataYear: formatFrontNumber(financeData.dataYear) || prevState.financedata.dataYear,
                sales: formatFrontNumber(financeData.sales) || prevState.financedata.sales,
                costOfSales: formatFrontNumber(financeData.costOfSales) || prevState.financedata.costOfSales,
                ebitda: formatFrontNumber(financeData.ebitda) || prevState.financedata.ebitda,
                depreciation: formatFrontNumber(financeData.depreciation) || prevState.financedata.depreciation,
                interestExpense: formatFrontNumber(financeData.interestExpense) || prevState.financedata.interestExpense,
                netProfit: formatFrontNumber(financeData.netProfit) || prevState.financedata.netProfit,
                cashBalance: formatFrontNumber(financeData.cashBalance) || prevState.financedata.cashBalance,
                debtLoan: formatFrontNumber(financeData.debtLoan) || prevState.financedata.debtLoan,
                equity: formatFrontNumber(financeData.equity) || prevState.financedata.equity,
                receivables: formatFrontNumber(financeData.receivables) || prevState.financedata.receivables,
                inventories: formatFrontNumber(financeData.inventories) || prevState.financedata.inventories,
                payables: formatFrontNumber(financeData.payables) || prevState.financedata.payables,
                netFixedAssets: formatFrontNumber(financeData.netFixedAssets) || prevState.financedata.netFixedAssets,
                valueType: formatFrontNumber(financeData.valueType) || prevState.financedata.valueType,
            },
            FinYrEnd: financeData.FinYrEnd || prevState.FinYrEnd,
        }));
    }
  }, [initialData]);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, field] = name.split('.'); // e.g., 'financedata.sales'
    
    setFormData(prevFormData => ({
        ...prevFormData,
        [category]: {
            ...prevFormData[category],
            [field]: value
        }
    }));
};

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const [category, field] = name.split('.');
    let newValue = value === '' ? '0.00' : value;

    const numValue = parseFloat(newValue);
    if (!isNaN(numValue)) {
        newValue = numValue.toFixed(2);
    } else {
        newValue = '0.00';
    }

    setFormData(prevFormData => ({
        ...prevFormData,
        [category]: {
            ...prevFormData[category],
            [field]: newValue
        }
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};
    
    if (!formData.financedata.valueType) {
        newErrors.financedata.valueType = 'This field is required.';
        isValid = false;
    }

    const validateNumber = (value, allowNegative) => {
        if (value === '' || isNaN(value)) return 'Invalid number.';
        const num = parseFloat(value);
        if (!allowNegative && num < 0) return '-ve values are not allowed.';
        if (allowNegative && num < 0) return null;
        if (num < 0) return '-ve values are not allowed.';
        return null;
    };

    const fields = {
        sales: false,
        costOfSales: false,
        ebitda: true,
        depreciation: false,
        interestExpense: false,
        netProfit: true,
        cashBalance: false,
        debtLoan: false,
        equity: false,
        receivables: false,
        inventories: false,
        payables: false,
        netFixedAssets: false,
    };

    Object.keys(fields).forEach(field => {
        const error = validateNumber(formData.financedata[field], fields[field]);
        if (error) {
            newErrors[`financedata.${field}`] = error;
            isValid = false;
        }
    });

    // Convert blank fields to 0.00
    const updatedFinancedata = Object.keys(formData.financedata).reduce((acc, field) => {
        acc[field] = formData.financedata[field] === '' ? '0.00' : formData.financedata[field];
        return acc;
    }, {});

    setFormData(prevFormData => ({
        ...prevFormData,
        financedata: updatedFinancedata
    }));

    setErrors(newErrors);

    if (isValid) {
        setIsLoading(true); // Start loading

        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.put(
                apiURL + '/order/update',
                formData,
                {
                    headers: {
                        Authorization: `${token}`
                    }
                }
            );
            if (response.status === 200) {
               onSave();
            }
        } catch (error) {
            console.error('Error saving form:', error);
        }finally {
            setIsLoading(false); // Start loading
        }
    }
 };

  return (
    <div className="card m-0 border-radius-0px border-0 box-shadow h-100" style={{backgroundColor: "#f2f3f6"}}>
        <div className="card-header fw-500 p-15px lh-normal bg-white">
            <p className="text-blue fw-600 mb-0 fs-16 lh-1 mt-5px mb-5px">New Order: <span className="text-dark-blue">Current Financial Information</span> <a href="" className="float-end text-blue text-golden-hover fw-600 fs-12"><i className="bi bi-info-circle-fill"></i> Need Help?</a></p>
            <div className="divider-style-03 divider-style-03-02 border-color-light-gray mb-10px mt-10px w-100"></div>
            <span className="fw-500 fs-14 lh-1 d-inline-block">Please specify all values in positive number only and up to 2 decimal places</span><br/><span className="fw-400 fs-12 fst-italic lh-1 d-inline-block">(Fields marked with <span className="text-red">*</span> can be negative)</span>
        </div>
        <div className="card-body p-0"  style={{
                maxHeight: '580px',
                overflowY: 'auto', // Enables vertical scrolling
                overflowX: 'hidden', // Hides horizontal scrolling if not needed
                padding: '20px', // Adds some padding for better content spacing
                scrollbarWidth: 'thin', // For Firefox, makes the scrollbar thinner
            }}
            data-scroll-options='{ "theme": "dark" }'>
            <form onSubmit={handleSubmit} className="row contact-form-style-04 myform-01 justify-content-center">
                <div className="col-sm-12 mt-20px ps-15 pe-15 text-center">
                    <p className="mb-0 fw-600 fs-14 lh-1">Provide historical numbers for year <span className="bg-blue text-white ps-10px pe-10px p-1 fw-600">{formData.FinYrEnd}</span></p>
                </div>
                <div className="col-sm-7 mt-20px ps-0">
                    <div className="row align-items-center">
                        <div className="w-130px text-end pe-0">
                            <label className="text-black mb-0 fw-600 fs-13 d-block lh-1">All values are in</label>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text p-0 pt-5 pb-5 w-35px h-40px justify-content-center border-radius-0px">
                                    <i className="fa fa-coins align-middle fs-20 lh-1"></i>
                                </span>
                                <input type="hidden" name="FinYrEnd" value={formData.FinYrEnd}/>
                                <div className="select">
                                    <select className="form-control" name="valueType" value={formData.financedata.valueType} onChange={handleChange} aria-label="select-industry">
                                        <option value="Absolute">Absolute</option>
                                        <option value="Thousands">Thousands</option>
                                        <option value="Millions">Millions</option>
                                        <option value="Billions">Billions</option>
                                        <option value="Trillions">Trillions</option>
                                    </select>
                                    {errors.valueType && <div className="text-danger">{errors.valueType}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {['sales', 'costOfSales', 'ebitda', 'depreciation', 'interestExpense', 'netProfit', 'cashBalance', 'debtLoan', 'equity', 'receivables', 'inventories', 'payables', 'netFixedAssets'].map((field, index) => (
                  <div className="col-sm-7 mt-20px ps-0" key={index}>
                    <div className="row align-items-center">
                        <div className="w-130px text-end pe-0">
                            <label className="text-black mb-0 fw-600 fs-13 d-block lh-1">
                                {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                {['ebitda', 'netProfit'].includes(field) && <sup className="text-red fs-14">*</sup>}
                            </label>
                        </div>
                        <div className="col">
                            <div className="input-group">
                                <span className="input-group-text p-0 pt-5 pb-5 w-35px h-40px justify-content-center border-radius-0px">
                                    <i className={`fa ${{
                                        sales: 'fa-chart-column',
                                        costOfSales: 'bi-bar-chart-line-fill',
                                        ebitda: 'bi-bar-chart-steps',
                                        depreciation: 'fa-chart-line',
                                        interestExpense: 'fa-dollar-sign',
                                        netProfit: 'fa-chart-bar',
                                        cashBalance: 'bi-cash-coin',
                                        debtLoan: 'bi-credit-card',
                                        equity: 'fa-scale-balanced',
                                        receivables: 'fa-hand-holding-dollar',
                                        inventories: 'bi-boxes',
                                        payables: 'fa-file-invoice-dollar',
                                        netFixedAssets: 'bi-wallet-fill',
                                    }[field]} align-middle fs-20 lh-1`}></i>
                                </span>
                                <input
                                  className="mb-0 form-control bg-white"
                                  type="text"
                                  name={`financedata.${field}`}
                                  value={formData.financedata[field]}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                            </div>
                            {errors[field] && <div className="text-danger">{errors[field]}</div>}
                        </div>
                    </div>
                  </div>
                ))}
                {isLoading ? (
                    <span>
                        <span><i className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></i></span>
                        <span className="btn-double-text ms-3px" data-text="Submitting...">Submitting...</span>
                    </span>
                ) : (
                <div className="col-sm-12 mt-20px mb-15px text-center">
                    <button onClick={backButton} className="bg-blue h-40px p-1 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px">
                        <i className="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                    </button>
                    <button type="submit" className="bg-blue h-40px p-1 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px">
                        <i className="feather icon-feather-save m-0 fs-16 align-text-bottom"></i> Save:Go To Financial Projections
                    </button>
                </div>
                )}
            </form>
        </div>
    </div>
  );
}

export default FinancialInfo;
