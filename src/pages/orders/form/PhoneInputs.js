import React from 'react';
import './PhoneInputStyles.css';

const PhoneInputs = ({ value, onChange, error, name }) => {
  // Handle changes for dial code
  const handleDialCodeChange = (e) => {
    const dialCode = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    onChange({
      target: {
        name: name,
        value: {
          ...value,
          dialCode: dialCode
        }
      }
    });
  };

  // Handle changes for phone number
  const handlePhoneNumberChange = (e) => {
    const phoneNumber = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    onChange({
      target: {
        name: name,
        value: {
          ...value,
          phoneNumber: phoneNumber
        }
      }
    });
  };

  return (
    <>
      <div className="phone-inputs">
        <input
          type="text"
          className={`border-radius-0px box-shadow form-control dial-code-input ${error ? 'is-invalid' : ''}`}
          placeholder="Code"
          value={value.dialCode || ''}
          onChange={handleDialCodeChange}
          maxLength="4" // Optional: Limit the length of the dial code
        />
        <input
          type="text"
          className={`border-radius-0px box-shadow form-control phone-number-input ${error ? 'is-invalid' : ''}`}
          placeholder="Phone Number"
          value={value.phoneNumber || ''}
          onChange={handlePhoneNumberChange}
          maxLength="10" // Optional: Limit the length of the phone number
        />
      </div>
      {error && <div className="text-danger">{error.phoneNumber}</div>}
    </>
  );
};

export default PhoneInputs;
