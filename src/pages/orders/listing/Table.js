import { formatDate } from "../../../common/numberUtils";
import { Link } from "react-router-dom";

const Table = ({data}) => {
const handleDownload = (report_url) => {
    const link = document.createElement('a');
    link.href = report_url;
    link.download = 'valuation_report.pdf'; // Suggest a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
       
  
 const renderLink = (status, id, submittedOn) => {

    if (status === 'Help Requested' && submittedOn !== null) {
        return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px">
            <i className="bi bi-info-circle"></i> View Details
        </Link>;
    }
    
    switch (status) {
        
        case 'Pending Submission':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil"></i> Edit</Link>;

        case 'Help Requested':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil"></i> Edit</Link>;    

        case 'Submitted':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;

        case 'Completed':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-pencil-square"></i> Modify & Re-Submit</Link>;

        case 'Re-Submitted':
           return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;
        
        case 'Completed (Revised)':
            return <Link to="/dashboard" className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;
      
        default:
            return <Link to={`/valuation-form/${id}`} className="fs-12 m-0 lh-1 pt-10px pb-10px text-white fs-12 fw-400 text-capitalize fin-btn d-inline-block ls-05px w-110px text-center border-radius-4px"><i className="bi bi-info-circle"></i> View Details</Link>;
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
                <div className="col-sm-3">
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
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Company Name</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue">Country</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Status</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Created On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Submitted On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Completed On</th>
                        <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-light-blue w-110px">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order, index) => (
                    <tr key={index}>
                        <th scope="row" className="align-middle text-center fs-14">{order['customerOrderSequence']}</th>
                        <td className="fs-14">{order['companyName']}
                            {order['status'] === 'Completed' && 
                            <>
                            <br />
                                <a 
                                    href={order.report_url} 
                                    className="bg-green text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal"  
                                    target="_blank" // Open in a new tab
                                    rel="noopener noreferrer" // Security best practice
                                    download // This attribute prompts a download instead of navigating
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
                                    target="_blank" // Open in a new tab
                                    rel="noopener noreferrer" // Security best practice
                                    download // This attribute prompts a download instead of navigating
                                >
                                    <i className="bi bi-download"></i> Valuation report
                                </a>
                            <br/>
                            <Link to="/dashboard" className="bg-red text-nowrap text-white border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal d-inline-block mt-5px"><i className="bi bi-arrow-clockwise"></i> Revised valuation report - Pending</Link
                            ></>
                            }
                            {order['status'] === 'Completed (Revised)' && 
                             <><br/>
                            <Link to="/dashboard"  className="bg-white-ice text-nowrap text-jade border-radius-5px pe-5px ps-5px pb-1 fs-11 ls-normal"><i className="bi bi-download"></i> Revised valuation report</Link></>
                            }
                        </td>
                        <td className="fs-14">{order['country']}</td>
                        <td className="fs-14">{order['status']}</td>
                        <td className="fs-14">{formatDate(order['createdAt'])}</td>
                        <td className="fs-14">{order['submittedOn'] !== '' && formatDate(order['submittedOn'])}</td>
                        <td className="fs-14">{order['completedOn'] !== '' && formatDate(order['completedOn'])}</td>
                        <td className="fs-14">{renderLink(order['status'], order['_id'], order['submittedOn'])}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>  
    </>
  )
}

export default Table;