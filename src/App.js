// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Navigate } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import routes from './routes/Route';
import CommonLayout from './common/CommonLayout';

export const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/user-login" />;
};

const App = () => {
  return (
    <Router>
      <CommonLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes routes={routes} />
        </Suspense>
      </CommonLayout>
    </Router>
  );
};

export default App;
