import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../../config/Config';
import { formatForecastNumber } from '../../../common/numberUtils';

// Component to render the YEAR header
const YearHeader = ({yearList}) => (
    
    <tr>
        <th scope="col" className="fw-400 w-150px ls-1px bg-blue text-white">YEAR</th>
        {yearList.map(year => (
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
const TableRow = ({ label, values, onValueChange, handleBlur }) => {
    const isNegativeAllowed = label === 'Forecasted Sales Growth Rate (Y-o-Y) (%)' ||
                              label === 'Forecasted EBITDA Margin (%)' ||
                              label === 'Forecasted Net Profit Margin (%)'||
                              label === 'Interest Rate (%)'||
                              label === 'Depreciation Rate (%)'||
                              label === 'Forecasted COGS (as % of revenue) (%)';

    return (
        <tr>
        <th scope="row">{label}</th>
        {values.map((value, index) => (
            <td key={index}>
                <div className="financial-info-input-container">
                    <input
                        type="text"
                        className="form-control p-0 text-center border-radius-0px financial-info-input"
                        placeholder="0.0"
                        value={value}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            // Allow negative values only for specific rows, otherwise allow only positive values
                            const regex = isNegativeAllowed ? /^-?\d*\.?\d{0,2}$/ : /^\d*\.?\d{0,2}$/;
                            if (regex.test(newValue)) {
                                onValueChange(index, newValue);
                            }
                        }}
                        onBlur={(e) => {
                            const sanitizedValue = e.target.value.trim();
                            if (sanitizedValue === '') {
                                onValueChange(index, '0.0');
                            } else {
                                const formattedValue = sanitizedValue.includes('.')
                                    ? parseFloat(sanitizedValue).toFixed(1)
                                    : `${sanitizedValue}.0`;
                                onValueChange(index, formattedValue);
                            }
                            handleBlur(label, values);
                        }}
                    />
                    <span>%</span>
                </div>
            </td>
        ))}
    </tr>
    );
};


// Main component
const ForecastInfo = ({ onSave, initialData ,backButton, onPercentChange, orderId, editAllowed }) => {
    const year= initialData.order.business.business.FinYrEnd;
    const years =  [year+1, year+2, year+3, year+4, year+5];
    const [isLoading, setIsLoading] = useState(false);
    const [accumulatedData, setAccumulatedData] = useState([]);
    // Initial values for each row
    const initialRows = [
        { label: 'Forecasted Sales Growth Rate (Y-o-Y) (%)', values: ['', '', '', '', ''] },
        { label: 'Forecasted COGS (as % of revenue) (%)', values: ['', '', '', '', ''] },
        { label: 'Forecasted EBITDA Margin (%)', values:['', '', '', '', ''] },
        { label: 'Interest Rate (%)', values: ['', '', '', '', '']  },
        { label: 'Depreciation Rate (%)', values: ['', '', '', '', ''] },
        { label: 'Forecasted Net Profit Margin (%)', values: ['', '', '', '', '']  }
    ];
    const [rows, setRows] = useState(initialRows);
    
    useEffect(() => {
        if (initialData?.calculations?.forecast_inc_stmt) {
            const data = initialData.calculations.forecast_inc_stmt;
            // Extract values from initialData
            const newRows = [
                { label: 'Forecasted Sales Growth Rate (Y-o-Y) (%)', values: data.map(item => formatForecastNumber(item.salesGrowthRate)) || [0.0, 0.0, 0.0, 0.0, 0.0] },
                { label: 'Forecasted COGS (as % of revenue) (%)', values: data.map(item => formatForecastNumber(item.cogs)) || [0.0, 0.0, 0.0, 0.0, 0.0]  },
                { label: 'Forecasted EBITDA Margin (%)', values: data.map(item => formatForecastNumber(item.ebitdaMargin)) || [0.0, 0.0, 0.0, 0.0, 0.0]  },
                { label: 'Interest Rate (%)', values: data.map(item => formatForecastNumber(item.interestRate)) || [0.0, 0.0, 0.0, 0.0, 0.0]  },
                { label: 'Depreciation Rate (%)', values: data.map(item => formatForecastNumber(item.depreciationRate)) || [0.0, 0.0, 0.0, 0.0, 0.0] },
                { label: 'Forecasted Net Profit Margin (%)', values: data.map(item => formatForecastNumber(item.netProfitMargin)) || [0.0, 0.0, 0.0, 0.0, 0.0]  }
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
            const token = localStorage.getItem('token');
            const response = await axios.put(apiURL + '/order/update', {
                forecast_inc_stmt_data: forecastIncStmtData,
                orderId : orderId,
            },
            {
                headers: {
                    Authorization: `${token}`
                }
            });
            if (response.status === 200) {
                if (e.nativeEvent.submitter.name === 'back') {
                    backButton(); // Call backButton function
                } else if (e.nativeEvent.submitter.name === 'save') {
                    onSave(); // Call onSave function
                }
             }
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }finally {
            setIsLoading(false); // Stop loading
        }
    };

    const handleBlur = (label, updatedValues) => {
        const updatedData = [...rows];
        const existingEntryIndex = updatedData.findIndex(item => item.label === label);
        
        if (existingEntryIndex > -1) {
            // Update the existing entry
            updatedData[existingEntryIndex] = { label, values: updatedValues };
        } else {
            // Add a new entry
            updatedData.push({ label, values: updatedValues });
        }

        // Update the accumulated data state
        setAccumulatedData(updatedData);

        // Pass the updated data to the onPercentChange function
        onPercentChange(updatedData);
    };
    
    const handleButton = async (buttonName) => {
        if (buttonName === 'back') {
            backButton(); // Call backButton function
        } else if (buttonName === 'next') {
            onSave(); // Call onSave function
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
                                <YearHeader yearList={years} />
                            </thead>
                            <tbody className="align-middle lh-sm">
                                {rows.map((row, rowIndex) => (
                                    <TableRow
                                        key={rowIndex}
                                        label={row.label}
                                        values={row.values}
                                        onValueChange={(colIndex, newValue) => handleValueChange(rowIndex, colIndex, newValue)}
                                        handleBlur = {handleBlur}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {!editAllowed ? (
                    <div className="col-sm-12 mt-20px mb-15px text-center">
                        <button
                            onClick={(e) => handleButton('back')}
                            className="border-radius-0px btn btn-round-edge bg-blue submit h-40px p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn"
                            type="button"
                        >
                            <span>
                                <span><i className="feather icon-feather-arrow-left-circle m-0"></i></span>
                                <span className="btn-double-text"> Back</span> 
                            </span>
                        </button>
                        &nbsp;
                        <button
                            onClick={(e) => handleButton('next')}
                            className="border-radius-0px btn btn-round-edge bg-blue submit h-40px p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn"
                            type="button"
                        >
                            <span>
                                <span><i className="feather icon-feather-arrow-right-circle m-0"></i></span>
                                <span className="btn-double-text"> Next</span> 
                            </span>
                        </button>
                    </div>
                ):( isLoading ? (
                    <div className="col-sm-12 text-center">
                        <span>
                            <span><i className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></i></span>
                            <span className="btn-double-text ms-3px" data-text="Submitting...">Submitting...</span>
                        </span>
                    </div>    
                ) : (
                    <form onSubmit={handleSubmit} className="row contact-form-style-04 myform">
                        <div className="col-sm-12 text-center">
                            <button className="border-radius-0px btn btn-round-edge bg-blue submit h-40px p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn" type="submit" name="back">
                                <span>
                                    <span><i className="feather icon-feather-arrow-left-circle m-0"></i></span>
                                    <span className="btn-double-text"> Back</span> 
                                </span>
                            </button>
                            &nbsp;
                            <button className="border-radius-0px btn btn-round-edge bg-blue submit h-40px p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn" type="submit" name="save">
                                <span>
                                    <span><i className="feather icon-feather-save m-0"></i></span>
                                    <span className="btn-double-text"> Save:Go To Financial Projections</span> 
                                </span>
                            </button>
                        </div>
                    </form>
                ))}
            </div>
        </div>
    );
};

export default ForecastInfo;
