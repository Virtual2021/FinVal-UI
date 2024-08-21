import React from 'react';

const Login = React.lazy(() => import('../pages/login/Login'));
const Signup = React.lazy(() => import('../pages/signup/Signup'));
const VerificationLink = React.lazy(() => import('../pages/signup/Verify'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Payment = React.lazy(() => import('../pages/payment/PaymentForm'));
const ValuationForm = React.lazy(() => import('../pages/orders/ValuationForm'));
const PreviewData = React.lazy(() => import('../pages/orders/preview-data/Preview'));
const SessionData = React.lazy(() => import('../pages/Session'));

const routes = [
  { path: '/user-login', component: Login, exact: true, private: false },
  { path: '/user-signup', component: Signup, exact: true, private: false },
  { path: '/user-verification/:id', component: VerificationLink, exact: true, private: false},
  { path: '/dashboard', component: Dashboard, exact: true, private: true },
  { path: '/payment', component: Payment, exact: true, private: true },
  { path: '/valuation-form', component: ValuationForm, exact: true, private: true},
  { path: '/preview-data/:id', component: PreviewData, exact: true, private: true},
  { path: '/clear-data', component: SessionData, exact: true, private: true}
];

export default routes;
