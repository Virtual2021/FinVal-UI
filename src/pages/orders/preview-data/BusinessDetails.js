const BusinessDetails = ({ data }) => {
    // Check if data and businessData exist
    const businessData = data?.order?.business?.business;
  
    // If businessData is not present, you can return null or some fallback UI
    if (!businessData) {
      return null; // or you can return a message like <p>No business data available</p>
    }
  
    return (
      <div className="col-sm-6">
        <fieldset className="bg-white p-15px h-100">
          <legend className="fw-600 float-none border-1px col-auto fs-18 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-blue text-golden">Business Details</legend>
          <div className="d-flex justify-content-center">
            <table className="fs-16 fw-400 lh-normal text-end">
            <tbody>
              <tr>
                <td className="p-5px w-220px align-top">Company Name</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.companyName || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Company Type</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.companyType || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Industry Type</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.industryType || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Years in Business</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.companyAge || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Country</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.country || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Financial Year End</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.FinYrEndMonth ? `${businessData.FinYrEndMonth} ${businessData.FinYrEndDate}` : 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Historical Earning Trend</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.earningTrend || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Short Description</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.description || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Contact Number</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.contact || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Email Address</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.email || 'N/A'}</td>
              </tr>
              <tr>
                <td className="p-5px align-top">Currency used in company</td>
                <td className="center p-5px align-top">:</td>
                <td className="fw-600 p-5px text-start align-top">{businessData.currency || 'N/A'}</td>
              </tr>
            </tbody>
            </table>
          </div>
        </fieldset>
      </div>
    );
  };
  
  export default BusinessDetails;
  