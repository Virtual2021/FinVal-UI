import React from 'react';
import Layout from '../components/Layout/Layout';
import { useLocation, matchPath } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Auth/Sidebar';
import AuthNavbar from '../components/Auth/Navbar';
import routes from '../routes/Route';

const CommonLayout = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token') !== null; 
  const location = useLocation();

  // Check if the current path is a private route
  const isPrivate = routes.some(route => {
    // Use matchPath to match the current path with the route definition
    return matchPath(route.path, location.pathname) && route.private;
  });

  return (
    <Layout>
      {isLoggedIn && isPrivate ? 
        <div className="home">
          <Sidebar />
          <AuthNavbar />
          {children}
        </div>
      : isLoggedIn && !isPrivate ? (
        <div>
          <AuthNavbar />
          {children}
        </div> 
      ) : ( 
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </Layout>
  );
};

export default CommonLayout;
