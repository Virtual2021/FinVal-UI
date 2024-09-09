const Upload = ({ onClose }) => {
  return (
    <div id="finValPopUp" class="mfp-hide modal-popup-main p-0">
        <div class="row">
            <div class="col-11 mx-auto bg-white position-relative">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="p-30px">
                            <p class="d-flex fs-16 lh-normal"><i class="bi bi-bookmark-star-fill text-blue fs-20 me-5px"></i> Upload following financial documents as available and our financial expert will review and get in touch with you to complete the required input data</p>
                            <div class="border border-color-extra-medium-gray border-radius-6px overflow-hidden mb-20px">
                                <p class="p-15px border-bottom border-1 mb-0 fs-14 border-color-extra-medium-gray">
                                    <span class="d-flex align-items-center"><i class="bi bi-diamond-half text-blue fs-14 me-5px"></i> Most recent company balance sheet</span>
                                    <span class="d-flex align-items-center"><i class="bi bi-diamond-half text-blue fs-14 me-5px"></i> Most recent company profit & loss statement</span>
                                    <span class="d-flex align-items-center"><i class="bi bi-diamond-half text-blue fs-14 me-5px"></i> Most recent company cash flow statement</span>
                                </p>
                                <p class="p-10px border-bottom border-1 mb-0 lh-normal fs-16 border-color-extra-medium-gray bg-very-light-golden"><span class="fw-700 text-blue">OR</span></p>
                                <p class="p-15px border-bottom border-1 border-color-extra-medium-gray mb-0 fs-14">
                                    <span class="d-flex align-items-center"><i class="bi bi-diamond-half text-blue fs-14 me-5px"></i> Last audited company financial statement</span>
                                </p>
                            </div>
                            <p class="d-flex fs-16 lh-normal"><i class="bi bi-bookmark-star-fill text-blue fs-20 me-5px"></i> Please continue to input, in the next 2 pages, whatever business and financial information you can, even after uploading the documents. Then submit the order.</p>
                            <p class="d-flex fs-16 lh-normal mb-0"><i class="bi bi-bookmark-star-fill text-blue fs-20 me-5px"></i> <span>For any other query regarding the valuation process please write to us at <a href="mailto:valuationsupport@fin-advisor.com" class="text-golden">valuationsupport@fin-advisor.com</a></span></p>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="p-30px">
                            <p class="fs-14 text-red mb-0 d-flex lh-1">(Please upload documents only in English language)</p>
                            <form class="myform-01">
                                <p class="fs-16 fw-600 mb-0 mt-0">Uploaded documents</p>
                                <div class="col-12 alert-box-style-02">
                                    {/* <!-- start alert box item --> */}
                                    <div class="alert alert-success alert-dismissable bg-light-blue text-blue p-0 fs-14 border-radius-0px mb-10px">
                                        <a href="#" class="close text-danger w-30px" data-bs-dismiss="alert" aria-label="close"><i class="feather icon-feather-x-circle"></i></a>
                                        <span class="d-flex align-items-center"><i class="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-1 me-5px"></i> ABC_Bal_Sheet_2023.pdf</span>
                                    </div>
                                    {/* <!-- end alert box item -->
                                    <!-- start alert box item --> */}
                                    <div class="alert alert-success alert-dismissable bg-light-blue text-blue p-0 fs-14 border-radius-0px mb-10px">
                                        <a href="#" class="close text-danger w-30px" data-bs-dismiss="alert" aria-label="close"><i class="feather icon-feather-x-circle"></i></a>
                                        <span class="d-flex align-items-center"><i class="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-1 me-5px"></i> ABC-Invome-Statment-23.xlsx</span>
                                    </div>
                                    {/* <!-- end alert box item -->
                                    <!-- start alert box item --> */}
                                    <div class="alert alert-success alert-dismissable bg-light-blue text-blue p-0 fs-14 border-radius-0px mb-10px">
                                        <a href="#" class="close text-danger w-30px" data-bs-dismiss="alert" aria-label="close"><i class="feather icon-feather-x-circle"></i></a>
                                        <span class="d-flex align-items-center"><i class="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-1 me-5px"></i> ABC-Cashflow-2023.pdf</span>
                                    </div>
                                    {/* <!-- end alert box item --> */}
                                </div>
                                <div class="col-12 mt-15px">
                                    <div class="input-group mb-10px">
                                        <input class="mb-0 form-control h-40px lh-36" type="file" name="" value=""/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <a href="javascript:void(0);" class="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px  border-radius-4px">
                                        <i class="feather icon-feather-file-plus m-0 fs-16 align-text-bottom"></i> Add Document
                                    </a>
                                </div>
                                <div class="row row-cols-1 justify-content-center mt-15px mb-15px">
                                    <div class="col-12 text-center divider-style-01">
                                        <div class="d-flex justify-content-center">
                                            <div class="divider-border d-flex align-items-center w-100">
                                                <span class="d-flex flex-column justify-content-center w-30px h-30px border border-color-extra-medium-gray rounded-circle ms-20px me-20px"><i class="feather icon-feather-arrow-down fs-16 text-dark-gray"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-center">
                                    <a href="#" class="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px  border-radius-4px">
                                        <i class="feather icon-feather-upload m-0 fs-16 align-text-bottom"></i> Upload document(s) to get support
                                    </a>
                                </div>
                                <div class="col-12 mt-15px">
                                    <label class="text-black mb-5px fw-500 fs-14 d-block lh-normal">Specify any other information you would like to share <span class="fs-12 text-light-gray fw-400"><br/>(like the future growth projections of the company)</span></label>
                                    <textarea class="border-radius-0px box-shadow form-control p-15px pt-10px fw-300" cols="20" rows="4" name="" placeholder="Additional information"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <button title="Close (Esc)" type="button" class="mfp-close text-dark-gray top-0 end-0 bg-golden text-blue h-30px w-30px border-radius-0px"></button>
            </div>
        </div>
    </div>
  );
}

export default Upload;