const Footer = () => {
    return (
      <>
        <footer className="footer-light bg-very-light-gray">
          <div className="container">
            <div className="row justify-content-center mb-5 xs-mb-20px">
              <div className="col-md-12 col-sm-10 text-center">
                <h4 className="alt-font text-dark-gray fw-500 ls-minus-1px">
                  Looking for business opportunity?{' '}
                  <a href="" className="text-base-color fw-500 text-decoration-line-bottom-medium">Send message</a>
                </h4>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-12 col-sm-6 order-4 order-lg-1 order-md-4 order-sm-3 md-mt-35px text-center text-sm-start text-md-center text-lg-start last-paragraph-no-margin">
                <a href="demo-finance.html" className="footer-logo mb-25px sm-mb-20px d-inline-block">
                  <img src="finimg/logo-blue.png" data-at2x="images/demo-finance-logo-black@2x.png" alt="FinVal Logo" />
                </a>
                <p className="mb-15px">
                  FA Fin Advisors is happy to introduce XYZ Business Valuation Software.
                </p>
                <p>&COPY; Copyright 2024{' '}
                  <a href="index.html" target="_blank" className="text-decoration-line-bottom text-dark-gray fw-500">FinVal</a>
                </p>
              </div>
              <div className="col-6 col-xl-2 col-lg-3 col-md-4 offset-xl-1 order-1 order-lg-2">
                <span className="alt-font fw-500 fs-20 d-block text-dark-gray mb-10px">Company</span>
                <ul>
                  <li><a href="">About company</a></li>
                  <li><a href="">Company expertise</a></li>
                  <li><a href="">Creative people</a></li>
                  <li><a href="">Pricing plans</a></li>
                </ul>
              </div>
              <div className="col-6 col-xl-2 col-lg-3 col-md-4 order-2 order-lg-3">
                <span className="alt-font fw-500 fs-20 d-block text-dark-gray mb-10px">Customer</span>
                <ul>
                  <li><a href="">Company services</a></li>
                  <li><a href="">Company story</a></li>
                  <li><a href="">Latest news</a></li>
                  <li><a href="">Contact us</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 offset-xl-1 order-3 order-lg-4 order-md-3 order-sm-4 sm-mt-35px xs-mt-25px text-center text-sm-start">
                <span className="alt-font fw-500 fs-20 d-block text-dark-gray mb-10px">Subscribe newsletter</span>
                <p className="mb-30px md-mb-20px sm-mb-15px">
                  Subscribe our newsletter to get the latest news and updates.
                </p>
                <div className="d-inline-block w-100 newsletter-style-02 position-relative">
                  <form action="email-templates/subscribe-newsletter.php" method="post" className="position-relative w-100">
                    <input
                      className="bg-white border-color-white w-100 form-control required box-shadow"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <input type="hidden" name="redirect" value="" />
                    <button className="btn submit" aria-label="submit">
                      <i className="icon feather icon-feather-mail fs-22 text-base-color"></i>
                    </button>
                    <div className="form-results border-radius-4px pt-5px pb-5px ps-15px pe-15px fs-14 lh-22 mt-10px w-100 text-center position-absolute d-none lh-20"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
  
  export default Footer;
  