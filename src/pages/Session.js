import { useEffect } from 'react';

const Session = () => {
  useEffect(() => {
    // Delete 'orderId' from sessionStorage when the component is loaded
    // sessionStorage.removeItem('orderId');
    console.log(sessionStorage);
    console.log('orderId removed from sessionStorage');
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Session Cleared</h1>
    </div>
  );
};

export default Session;
