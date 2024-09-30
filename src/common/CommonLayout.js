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
  const role = localStorage.getItem('role');

  // Check if the current path is a private route
  const isPrivate = routes.some(route => {
    // Use matchPath to match the current path with the route definition
    return matchPath(route.path, location.pathname) && route.private;
  });

  return (
    <Layout>
      {isLoggedIn ? (
        // For logged-in users
        isPrivate ? (
          // For private routes
          role && role !== 'admin' ? (
            // If the user is not an admin, show Sidebar and AuthNavbar
            <div className="home">
              <Sidebar />
              <AuthNavbar />
              {children}
            </div>
          ) : (
            // If the user is an admin and trying to access restricted routes
            <>
              <AuthNavbar />
              {children}
            </> // You could return a NotAuthorized component here
          )
        ) : (
          // For public routes (but logged-in users)
          <div>
            <AuthNavbar />
            {children}
          </div>
        )
      ) : (
        // For non-logged-in users
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
