import { Link, useNavigate } from "react-router-dom";
import { formatDate, formatNumber } from "../../../common/numberUtils";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AdvisorUpgrade = ({ currentPlan, data }) => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Set default selected plan on component mount
  useEffect(() => {
    const defaultIndex = data.length % 2 === 0 ? data.length / 2 - 1 : Math.floor(data.length / 2);
    setSelectedPlan(data[defaultIndex]);
  }, [data]);

  const handleSelection = (item) => {
    setSelectedPlan(item);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      // Navigate to the next page with the selected plan data
      navigate("/upgrade-summary", { state: { plan: selectedPlan, currentPlan: currentPlan } });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please select a plan to upgrade.',
      });
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <fieldset className="ps-15px pe-15px pt-10px mt-15px mb-15px">
            <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Select one of the available plan options to upgrade</legend>
            <div className="table-responsive">
              <table className="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                <thead className="border-solid border-1 border-light-blue">
                  <tr>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue w-70px">Select</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">No. of<br />Reports</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Access<br />Days</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Plan Price<br />(USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="fs-14 p-0 h-40px">
                        <input
                          className="form-check-input p-0 mt-0 text-black w-15px h-15px border-blue"
                          type="radio"
                          name="companyType"
                          id={`radio${index}`}
                          value={item.id}
                          checked={selectedPlan && selectedPlan.id === item.id} // Check if this item is the selected plan
                          onChange={() => handleSelection(item)}
                        />
                      </td>
                      <td className="fs-14 p-0">
                        <label htmlFor={`radio${index}`} className="d-block">{item.originalReports}</label>
                      </td>
                      <td className="fs-14 p-0">
                        <label htmlFor={`radio${index}`} className="d-block">{item.originalAccessDays}</label>
                      </td>
                      <td className="fs-14 p-0">
                        <label htmlFor={`radio${index}`} className="d-block">{formatNumber(item.price)}</label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
        <div className="col-lg-6">
          <fieldset className="ps-15px pe-15px pt-10px mt-15px mb-15px">
            <legend className="fw-600 float-none border-1px col-auto fs-14 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-light-blue text-blue m-0 text-center">Your current plan gets converted to following</legend>
            <div className="table-responsive">
              <table className="table table-striped fs-14 lh-normal mytable border-blue align-middle text-center" border="1">
                <thead className="border-solid border-1 border-light-blue">
                  <tr>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Total<br />Reports</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Access<br />Days</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">New Expire<br />Date</th>
                    <th scope="col" className="text-nowrap bg-blue text-white fw-600 border-solid border-1 border-blue">Upgrade Price<br /> to Pay (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td className="fs-14 h-40px">{item.reports}</td>
                      <td className="fs-14">{item.access_days}</td>
                      <td className="fs-14">{formatDate(item.expiresAt)}</td>
                      <td className="fs-14">{formatNumber(item.upgrade_price)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          <button
            onClick={handleContinue}
            className="bg-blue h-40px lh-40 p-0 fs-12 mb-15px text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px w-100px border-radius-4px"
          >
            Continue <i className="feather icon-feather-arrow-right-circle m-0 fs-16 align-text-bottom"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvisorUpgrade;
