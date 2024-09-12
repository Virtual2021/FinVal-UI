import React, { useState, useRef } from 'react';

const Form = () => {
  const [files, setFiles] = useState([]);
  const [tempFile, setTempFile] = useState(null); // Temporary state for file selection
  const fileInputRef = useRef(null); // useRef to manage file input

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTempFile(file); // Set the temporary file state
    }
  };

  const handleAddFile = () => {
    if (tempFile) {
      setFiles((prevFiles) => [...prevFiles, tempFile]); // Add the file to the main files state
      setTempFile(null); // Clear the temporary file state
      fileInputRef.current.value = ""; // Clear the file input value
    } else {
      alert("No file selected!");
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index)); // Remove file from list
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (files.length === 0) {
      alert("Please upload at least one document.");
      return;
    }
    console.log("Form submitted with files:", files);
    // Perform form submission or file upload logic here
  };

  return (
    <div className="col-sm-6">
      <div className="p-30px">
        <p className="fs-14 text-red mb-0 d-flex lh-1">(Please upload documents only in English language)</p>
        <form className="myform-01" onSubmit={handleSubmit}>
          <p className="fs-16 fw-600 mb-0 mt-0">Uploaded documents</p>
          <div className="col-12 alert-box-style-02">
            {files.map((file, index) => (
              <div key={index} className="alert alert-success alert-dismissable bg-light-blue text-blue p-0 fs-14 border-radius-0px mb-10px">
                <a
                  href="#!"
                  className="close text-danger w-30px"
                  onClick={() => handleRemoveFile(index)}
                >
                  <i className="feather icon-feather-x-circle"></i>
                </a>
                <span className="d-flex align-items-center">
                  <i className="bi bi-file-earmark-text m-0 fs-16 bg-blue text-white p-1 me-5px"></i> {file.name}
                </span>
              </div>
            ))}
          </div>

          {files.length < 4 && (
            <div className="col-12 mt-15px">
              <div className="input-group mb-10px">
                <input
                  ref={fileInputRef} // Assigning ref to input field
                  className="mb-0 form-control h-40px lh-36"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
              <div className="col-12">
                <button
                  type="button" // Ensures it doesn't trigger form submit
                  onClick={handleAddFile}
                  className="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px border-radius-4px"
                >
                  <i className="feather icon-feather-file-plus m-0 fs-16 align-text-bottom"></i> Add Document
                </button>
              </div>
            </div>
          )}

          <div className="col-12 mt-15px">
            <label className="text-black mb-5px fw-500 fs-14 d-block lh-normal">
              Specify any other information you would like to share 
              <span className="fs-12 text-light-gray fw-400"><br />(like the future growth projections of the company)</span>
            </label>
            <textarea
              className="border-radius-0px box-shadow form-control p-15px pt-10px fw-300"
              cols="20"
              rows="4"
              name=""
              placeholder="Additional information"
            ></textarea>
          </div>
          <div className="row row-cols-1 justify-content-center mt-15px mb-15px">
            <div className="col-12 text-center divider-style-01">
              <div className="d-flex justify-content-center">
                <div className="divider-border d-flex align-items-center w-100">
                  <span className="d-flex flex-column justify-content-center w-30px h-30px border border-color-extra-medium-gray rounded-circle ms-20px me-20px">
                    <i className="feather icon-feather-arrow-down fs-16 text-dark-gray"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="bg-blue h-40px lh-40 p-0 ps-15px pe-15px fs-12 m-0 text-white fs-12 fw-600 text-capitalize fin-btn d-inline-block ls-05px border-radius-4px"
            >
              <i className="feather icon-feather-upload m-0 fs-16 align-text-bottom"></i> Upload document(s) to get support
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
