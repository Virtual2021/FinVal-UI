const Documents = () => { 
    return (
    <div className="col-sm-6">
        <fieldset className="bg-white p-15px mt-0 mt-sm-30px h-100">
            <legend className="fw-600 float-none border-1px col-auto fs-18 ps-15px pe-15px p-5px lh-1 border-radius-4px bg-blue text-golden">Documents Uploaded</legend>
            <p className="fs-14 lh-normal">
                {/* <a href="" className="bg-light-blue p-0 pe-5px d-inline-block" style="word-break:break-all;"> */}
                    <i className="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white  p-5px"></i> ABC_Bal_Sheet_2023.pdf
                {/* </a> */}
            </p>
            <p className="fs-14 lh-normal">
                {/* <a href="" className="bg-light-blue p-0 pe-5px d-inline-block" style="word-break:break-all;"> */}
                    <i className="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-5px"></i> ABC-Invome-Statment-23.xlsx
                {/* </a> */}
            </p>
            <p className="fs-14 lh-normal">
                {/* <a href="" className="bg-light-blue p-0 pe-5px d-inline-block" style="word-break:break-all;"> */}
                    <i className="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-5px"></i> ABC-Cashflow-2023.pdf
                {/* </a> */}
            </p>
        </fieldset>
    </div>
    );
}

export default Documents;