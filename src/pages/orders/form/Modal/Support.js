import React, {useState} from 'react';
import UploadForm from './UploadForm/Upload';

const Support = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsModalOpen(true); // Open the modal
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  console.log('Set Modal',isModalOpen );
   return (
    <>
    <div className="header-cart-icon icon float-end">
        <div className="header-cart dropdown">
            <a href="#finValPopUp" className="popup-with-form float-end text-blue text-golden-hover fw-600 fs-12"><i className="bi bi-info-circle-fill"></i> Get Support?</a> 
            <ul className="cart-item-list p-15px bg-light-blue">
                <li className="cart-item align-items-center fs-12 p-0">
                    <span>
                        Your plan offers help from our financial experts. 
                        <a href="#finValPopUp" 
                        className="popup-with-form fw-700 text-blue"
                        onClick={handleModalOpen}>
                    Click this link to upload</a> your financial documents to have our financial expert fill out these details for you
                    </span>
                </li>
            </ul>
        </div>
    </div>

    {/* Conditionally render UploadForm modal */}
    {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <UploadForm onClose={handleModalClose} /> {/* Pass close function */}
          </div>
        </div>
      )}
    </>
   );
}

export default Support;