import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../config/Config';
import { formatNumber } from '../../../common/numberUtils';

// Component to render the YEAR header
const YearHeader = () => (
    <tr>
        <th scope="col" className="fw-400 w-150px ls-1px bg-blue text-white">YEAR</th>
        {[2024, 2025, 2026, 2027, 2028].map(year => (
            <th scope="col" className="bg-blue" key={year}>
                <input
                    type="text"
                    className="form-control p-0 ps-10px pe-10px text-center bg-light-blue text-blue fw-600 border-radius-0px"
                    value={year}
                    disabled
                />
            </th>
        ))}
    </tr>
);

// Component to render a single table row with inputs
const TableRow = ({ label, values, onValueChange }) => (
    <tr>
        <th scope="row">{label}</th>
        {values.map((value, index) => (
            <td key={index}>
                <input
                    type="text"
                    className="form-control p-0 text-center border-radius-0px"
                    value={value}
                    onChange={(e) => {
                        const newValue = e.target.value;
                        // Allow only numbers and decimal values up to 2 places
                        if (/^\d*\.?\d{0,2}$/.test(newValue)) {
                            onValueChange(index, newValue);
                        }
                    }}
                    onBlur={(e) => {
                        const sanitizedValue = e.target.value.trim();
                        if (sanitizedValue === '') {
                            onValueChange(index, '0.00');
                        } else {
                            const formattedValue = sanitizedValue.includes('.')
                                ? parseFloat(sanitizedValue).toFixed(2)
                                : `${sanitizedValue}.00`;
                            onValueChange(index, formattedValue);
                        }
                    }}
                />
            </td>
        ))}
    </tr>
);

// Main component
const ForecastInfo = ({ onSave, initialData ,backButton }) => {
    const [isLoading, setIsLoading] = useState(false);
    // Initial values for each row
    const initialRows = [
        { label: 'Forecasted Sales Growth Rate %(Y-o-Y)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] },
        { label: 'Forecasted COGS %(as % of revenue)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] },
        { label: 'Forecasted EBITDA Margin (%)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] },
        { label: 'Interest Rate (%)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] },
        { label: 'Depreciation Rate (%)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] },
        { label: 'Forecasted Net Profit Margin (%)', values: ['0.00', '0.00', '0.00', '0.00', '0.00'] }
    ];
    const [rows, setRows] = useState(initialRows);
    
    useEffect(() => {
        if (initialData?.calculations?.forecast_inc_stmt) {
            const data = initialData.calculations.forecast_inc_stmt;
            // Extract values from initialData
            const newRows = [
                { label: 'Forecasted Sales Growth Rate %(Y-o-Y)', values: data.map(item => formatNumber(item.salesGrowthRate)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] },
                { label: 'Forecasted COGS %(as % of revenue)', values: data.map(item => formatNumber(item.cogs)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] },
                { label: 'Forecasted EBITDA Margin (%)', values: data.map(item => formatNumber(item.ebitdaMargin)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] },
                { label: 'Interest Rate (%)', values: data.map(item => formatNumber(item.interestRate)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] },
                { label: 'Depreciation Rate (%)', values: data.map(item => formatNumber(item.depreciationRate)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] },
                { label: 'Forecasted Net Profit Margin (%)', values: data.map(item => formatNumber(item.netProfitMargin)) || ['0.00', '0.00', '0.00', '0.00', '0.00'] }
            ];

            
            setRows(newRows);
        }
    }, [initialData]);

    // Function to handle input changes
    const handleValueChange = (rowIndex, colIndex, newValue) => {
        const formattedValue = newValue.trim();

        const updatedRows = rows.map((row, index) => {
            if (index === rowIndex) {
                return {
                    ...row,
                    values: row.values.map((value, i) => 
                        i === colIndex ? formattedValue : value
                    )
                };
            }
            return row;
        });

        setRows(updatedRows);
    };

    // Function to transform data into the required format and send it to the API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        const forecastIncStmtData = rows[0].values.map((_, colIndex) => {
            return {
                sales: rows[0].values[colIndex],
                cogs: rows[1].values[colIndex],
                ebitdaMargin: rows[2].values[colIndex],
                interestRate: rows[3].values[colIndex],
                depreciationRate: rows[4].values[colIndex],
                netProfitMargin: rows[5].values[colIndex],
            };
        });

        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.put(apiURL + '/order/update', {
                forecast_inc_stmt_data: forecastIncStmtData,
                orderId : sessionStorage.getItem('orderId'),
            },
            {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (response.status === 200) {
                onSave();
             }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div className="card m-0 border-radius-0px border-0 box-shadow h-100" style={{ backgroundColor: "#f2f3f6" }}>
            <div className="card-header fw-500 p-15px lh-normal bg-white">
                <p className="text-blue fw-600 mb-0 fs-16 lh-1 mt-5px mb-5px">
                    New Order: <span className="text-dark-blue">Financial Projections</span>
                </p>
            </div>
            <div
                className="card-body p-0"
                style={{
                    maxHeight: '660px',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    padding: '20px',
                    scrollbarWidth: 'thin',
                }}
                data-scroll-options='{ "theme": "dark" }'
            >
                <div className="row">
                    <div className="col-sm-12 p-15px ps-30px pe-30px">
                        <table className="table table-striped table-bordered fs-12 mytable">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="6" className="fs-14 fw-400 pt-0 pb-0 bg-blue text-white">
                                        Income Statement Assumptions
                                    </th>
                                </tr>
                                <YearHeader />
                            </thead>
                            <tbody className="align-middle lh-sm">
                                {rows.map((row, rowIndex) => (
                                    <TableRow
                                        key={rowIndex}
                                        label={row.label}
                                        values={row.values}
                                        onValueChange={(colIndex, newValue) => handleValueChange(rowIndex, colIndex, newValue)}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {isLoading ? (
                    <span>
                        <span><i className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></i></span>
                        <span className="btn-double-text ms-3px" data-text="Submitting...">Submitting...</span>
                    </span>
                ) : (
                    <form onSubmit={handleSubmit} className="row contact-form-style-04 myform">
                        <div className="col-sm-12 text-center">
                            <button type="button" onClick={backButton} className="bg-blue h-40px p-1 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px">
                                <i className="feather icon-feather-arrow-left-circle m-0 fs-16 align-text-bottom"></i> Back
                            </button>
                            <button type="submit" className="bg-blue h-40px p-1 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px">
                                <i className="feather icon-feather-save m-0 fs-16 align-text-bottom"></i> Save: Go To Balance Sheet Assumptions
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForecastInfo;
