// src/common/CommonLayout.js
import React from 'react';
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Auth/Sidebar';
import AuthNavbar from '../components/Auth/Navbar';

const CommonLayout = ({ children }) => {
  const isLoggedIn = sessionStorage.getItem('token') !== null; 
  return (
    <Layout>
      {isLoggedIn ? 
      <div className="home">
          <Sidebar/>
          <AuthNavbar />
          {children}
      </div>
      : 
      <>
        <Navbar />
        {children}
        <Footer />
      </>
      }
      
    </Layout>
  );
};

export default CommonLayout;
