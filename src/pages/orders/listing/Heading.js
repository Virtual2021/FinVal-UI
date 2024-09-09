const Heading = ({data}) => {
    console.log(data);
  const customer = data.customers || [];  
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-4 justify-content-center align-items-center" data-anime='{ "el": "childs", "rotateZ": [5, 0], "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
        <div className="col w-30 icon-with-text-style-10 mt-15px fin-box">
            <p className="fw-600 text-blue fs-19 m-0">My Order</p>
            <div className="divider-style-03 divider-style-03-01 m-0 w-100" style={{borderColor:'rgba(0, 0, 0, 0.175)'}}></div>
        </div>
        <div className="col w-20 icon-with-text-style-10 mt-15px fin-box">
            <div className="feature-box bg-white justify-content-center box-shadow p-5px border-radius-5px border-1 border-solid border-light-blue">
                <div className="row row-cols-2 align-items-center justify-content-start w-100">
                    <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle p-0">
                        <i className="line-icon-Bulleted-List text-blue text-dark-blue-hover fs-16 fw-600"></i>
                    </div>
                    <div className="col-8 feature-box-content last-paragraph-no-margin lh-normal text-start ps-10px">
                        <p className="fs-12 text-light-blue lh-normal">Plan Type</p>
                        <span className="d-block fw-600 text-black mb-0 fs-16">{customer.activePlanType || 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col icon-with-text-style-10 mt-15px fin-box">
            <div className="feature-box bg-white justify-content-center box-shadow p-5px  border-radius-5px border-1 border-solid border-light-blue">
                <div className="row row-cols-2 align-items-center justify-content-start w-100">
                    <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle">
                        <i className="line-icon-Box-Close text-blue text-dark-blue-hover fs-16 fw-600"></i>
                    </div>
                    <div className="col-8 feature-box-content last-paragraph-no-margin lh-normal text-start ps-10px">
                        <p className="fs-12 text-light-blue lh-normal">New Orders Available</p>
                        <span className="d-block fw-600 text-black mb-0 fs-16">{customer.TotalPlanOrderedCount || 0}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col icon-with-text-style-10 mt-15px fin-box">
            <div className="feature-box bg-white justify-content-center box-shadow p-5px border-radius-5px border-1 border-solid border-light-blue">
                <div className="row row-cols-2 align-items-center justify-content-start w-100">
                    <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle">
                        <i className="line-icon-Time-Backup text-blue text-dark-blue-hover fs-16 fw-600"></i>
                    </div>
                    <div className="col-8 feature-box-content last-paragraph-no-margin lh-normal text-start ps-10px">
                        <p className="fs-12 text-light-blue lh-normal text-nowrap">Days Remianing in plan</p>
                        <span className="d-block fw-600 text-black mb-0 fs-16">{customer.daysLeft || 0}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Heading;