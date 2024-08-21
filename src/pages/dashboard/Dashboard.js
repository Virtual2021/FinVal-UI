import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

    // Retrieve token and name from localStorage
    const token = localStorage.getItem('token');
    
    // If token is not present, redirect to login
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

  return (
    <></>
  )
}

export default Dashboard;