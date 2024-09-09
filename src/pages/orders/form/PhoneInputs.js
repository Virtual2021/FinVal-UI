import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './PhoneInputStyles.css'; // Custom CSS for better design

const PhoneInputs = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleChange = (value, country, e, formattedValue) => {
    setPhone(value);
    
    // Simple validation: Check if the phone number is long enough
    if (value.replace(/[^0-9]/g, '').length < 10) {
      setError('Phone number is too short');
    } else {
      setError('');
    }
  };

  return (
    <div className="phone-input-container">
      <PhoneInput
        country={'us'} // Default country
        value={phone}
        onChange={handleChange}
        placeholder="Enter phone number"
        enableSearch={true} // Enable the search bar in the country dropdown
        countryCodeEditable={false} // Disable dial code editing
        inputClass={`custom-phone-input ${error ? 'is-invalid' : ''}`} // Apply custom class
        buttonClass="custom-flag-button" // Custom class for the flag dropdown
        dropdownClass="custom-dropdown" // Custom class for the dropdown
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default PhoneInputs;
