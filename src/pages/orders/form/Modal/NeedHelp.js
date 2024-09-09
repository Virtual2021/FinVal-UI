const NeedHelp = ({data}) => {
  return (
    <div class="header-cart-icon icon float-end">
        <div class="header-cart dropdown">
            <a href="javascript:void(0);" class="float-end text-blue text-golden-hover fw-600 fs-12"><i class="bi bi-info-circle-fill"></i> Need Help?</a> 
            <ul class="cart-item-list p-15px bg-light-blue">
                <li class="cart-item align-items-center fs-12 pt-0">
                    We can help you in completing the input data required to order the valuation report.
                </li>
                <li class="cart-item align-items-center fs-12 d-inline-block">
                    Upgrade to <span class="fw-900">Business Owner Plus</span> plan where our analyst will review your companys data and work with you to fill the required information.
                </li>
                <li class="cart-item align-items-center justify-content-center pb-0">
                    <a href="upgrade-summary.html" class="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px border-radius-4px">
                        Upgrade Now for just ${data.price}
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default NeedHelp;