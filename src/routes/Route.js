import React from 'react';

const Login = React.lazy(() => import('../pages/login/Login'));
const Signup = React.lazy(() => import('../pages/signup/Signup'));
const VerificationLink = React.lazy(() => import('../pages/signup/Verify'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Payment = React.lazy(() => import('../pages/payment/PaymentForm'));
const ValuationForm = React.lazy(() => import('../pages/orders/ValuationForm'));
const PreviewData = React.lazy(() => import('../pages/orders/preview-data/Preview'));
const SessionData = React.lazy(() => import('../pages/Session'));
const OrderData = React.lazy(() => import('../pages/orders/listing/Listing'));
const About = React.lazy(() => import('../pages/front/About'));
const Team = React.lazy(() => import('../pages/front/Team'));
const Pricing = React.lazy(() => import('../pages/front/Pricing'));
const Contact = React.lazy(() => import('../pages/front/Contact'));
const Blog = React.lazy(() => import('../pages/front/Blog'));
const Home = React.lazy(() => import('../pages/front/Home'));

const routes = [
  { path: '/', component: Home, exact: true, private: false },
  { path: '/about', component: About, exact: true, private: false },
  { path: '/team', component: Team, exact: true, private: false },
  { path: '/pricing', component: Pricing, exact: true, private: false },
  { path: '/contact', component: Contact, exact: true, private: false },
  { path: '/blog', component: Blog, exact: true, private: false },
  { path: '/user-login', component: Login, exact: true, private: false },
  { path: '/user-signup', component: Signup, exact: true, private: false },
  { path: '/user-verification/:id', component: VerificationLink, exact: true, private: false},
  { path: '/dashboard', component: Dashboard, exact: true, private: true },
  { path: '/payment', component: Payment, exact: true, private: true },
  { path: '/valuation-form/:orderId?', component: ValuationForm, exact: true, private: true},
  { path: '/preview-data/:id', component: PreviewData, exact: true, private: true},
  { path: '/orders', component: OrderData, exact: true, private: true},
  { path: '/clear-data', component: SessionData, exact: true, private: false}
];

export default routes;
