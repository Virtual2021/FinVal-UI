import React, {useEffect} from "react";
import { formatDate } from "../../../common/numberUtils";
import { Link } from "react-router-dom";
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css'; // Optional, for basic styling

const Table = ({data}) => {
 const renderLink = (status, id, submittedOn, custody ,resubmit_time, resubmit_pending, orderplan) => {
    console.log(orderplan);
     
    if (status === 'Help Requested' && custody === "Company") {
        return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
            <i className="bi bi-info-circle"></i> View Details
        </Link>;
    }

    if (status === 'Help Requested' && custody === "Customer") {
        if(orderplan?.planOrderId?.planStatusType === 'expired'){
            return <><Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
                <i className="bi bi-info-circle"></i> View Details
            </Link>
            <br/><span class="text-red text-center fs-12">Plan Expired</span></>;
        }else {
            return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil"></i> Edit</Link>;
        } 
    }

    if(status === 'Completed' && resubmit_pending === 1){
        return <div className="btn-group text-nowrap">
                    <Link
                        to = {`/valuation-form/${id}`}  
                        className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-80px text-center border-radius-4px"
                        style={{ borderBottomRightRadius: "0px", borderTopRightRadius: "0px" }}
                    >
                        <i className="bi bi-pencil-square"></i> Modify
                    </Link>
                    <Tooltip
                        placement="top" // Tooltip position
                        overlay={<span>{`${resubmit_time} hours remaining to re-submit`}</span>} // Tooltip content
                        trigger={['hover']} // Trigger on hover
                        >
                        <span
                            className="bg-red pt-10px pb-10px fw-400 text-white w-30px text-center border-radius-4px"
                            style={{ borderBottomLeftRadius: "0px", borderTopLeftRadius: "0px" }}
                        >
                            <i className="bi bi-clock"></i>
                        </span>
                        </Tooltip>
                </div>
    }

    if(status === 'Completed' && resubmit_pending === 0){
        return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
            <i className="bi bi-info-circle"></i> View Details
        </Link>;
    }

    if(status === 'Pending Submission'){
       if(orderplan?.planOrderId?.planStatusType === 'expired'){
            return <><Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
                <i className="bi bi-info-circle"></i> View Details
            </Link>
            <br/><span class="text-red text-center fs-12">Plan Expired</span></>;
       }else {
            return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil"></i> Edit</Link>;
       } 
    }
    
    switch (status) {
        case 'Help Requested':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil"></i> Edit</Link>;    

        case 'Submitted':
           return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;

        case 'Re-Submitted':
           return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;
        
        case 'Completed (Revised)':
        return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
                <i className="bi bi-info-circle"></i> View Details
            </Link>;
      
        default:
            return <Link to={`/preview-data/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
                <i className="bi bi-info-circle"></i> View Details
            </Link>;
    }
    };

  return (
    <>
        <form className="contact-form-style-04 myform-01 justify-content-center mt-15px">
            <div className="row justify-content-between">
                <div className="col-sm-3">
                    <div className="input-group mb-10px w-180px">
                        <span className="input-group-text p-5px h-30px justify-content-center border-radius-0px fs-14">Show</span>
                        <div className="select">
                            <select className="form-control h-30px" name="select" aria-label="select-industry">
                                <option value="10">10</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="1000">1000</option>
                                <option value="All">All</option>
                            </select>
                        </div>
                        <span className="input-group-text p-5px h-30px justify-content-center border-radius-0px fs-14">entries</span>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="input-group mb-10px">
                        <span className="input-group-text p-0 w-35px h-30px justify-content-center border-radius-0px">
                            <i className="bi bi-search align-middle fs-18 lh-1"></i>
                        </span>
                        <input className="mb-0 form-control bg-white h-30px" type="text" name="search" value=""/>
                        <button className="bg-blue h-30px lh-1 ps-10px pe-10px fs-12 m-0  text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px border-0" type="button">Search</button>
                    </div>
                </div>
            </div>
        </form>
        <div className="table-responsive">
            <table className="table table-striped table-bordered fs-14 lh-normal mytable border-light-blue align-middle">
                <thead className="border-solid border-1 border-light-blue">
                    <tr>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">Order#</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-50px">Plan Id</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Company Name</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Country</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Status</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Created On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Submitted On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Completed On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Invoice</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order, index) => (
                    <tr key={index}>
                        <th scope="row" className="align-middle text-center fs-14">{order['customerOrderSequence']}</th>
                        <th scope="row" className="align-middle text-center fs-14"> {order?.orderplan?.planOrderId?.planSeqId ?? ''}</th>
                        <td className="fs-14">{order['companyName']}
                            {order['status'] === 'Completed' && 
                            <>
                            <br />
                            <a 
                                href={order.report_url} 
                                target="_blank"
                                className="bg-green text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal"  
                                rel="noopener noreferrer"
                                download
                            >
                                <i className="bi bi-download"></i> Valuation report
                            </a>
                            </>
                            }
                            {order['status'] === 'Re-Submitted' && 
                             <><br/>
                               <a 
                                    href={order.report_url} 
                                    className="bg-green text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal"  
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    download
                                >
                                    <i className="bi bi-download"></i> Valuation report
                                </a>

                            <br/>
                            <span className="bg-red text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal d-inline-block mt-5px"><i className="bi bi-arrow-clockwise"></i> Revised valuation report - Pending</span>
                            </>
                            }
                            {order['status'] === 'Completed (Revised)' && 
                             <><br/>
                                <a 
                                    href={order.report_url} 
                                    className="bg-green text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal"  
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    download
                                    >
                                    <i className="bi bi-download"></i>Revised Valuation report
                                    </a>

                            </>    
                            }
                        </td>
                        <td className="fs-14">{order['country']}</td>
                        <td className="fs-14">{order['status']}</td>
                        <td className="fs-14">{formatDate(order['createdAt'])}</td>
                        <td className="fs-14">{order['submittedOn'] !== '' && formatDate(order['submittedOn'])}</td>
                        <td className="fs-14">{order['completedOn'] !== '' && formatDate(order['completedOn'])}</td>
                        <td className="fs-14">{renderLink(order['status'], order['_id'], order['submittedOn'], order['custody'], order['remaining_hours'], order['resubmit_pending'], order['orderplan'])}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>  
    </>
  )
}

export default Table;