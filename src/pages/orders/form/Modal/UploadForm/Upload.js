import React from 'react';
import Details from './Details';
import Form from './Form';

const Upload = () => {
  return (
    <div>
      <div className="row">
        <div className="col-11 mx-auto bg-white position-relative">
          <div className="row">
            <Details />
            <Form />
          </div>
          {/* Close button should be handled by the parent modal */}
        </div>
      </div>
    </div>
  );
};

export default Upload;
