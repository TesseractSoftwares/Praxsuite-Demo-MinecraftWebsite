import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from "./pages/HomePage";
import SupportPage from './pages/SupportPage';
import ErrorPage from './pages/ErrPage';
import AboutusPage from './pages/AboutusPage';
// import { LoginPage } from "./pages/loginPage/login";
// import { RegisterPage } from "./pages/registerPage/register";
// import ProfilePage from './pages/ProfilePage';
// import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
// import { ChangePasswordPage } from './pages/ChangePasswordPage';
// import ConfigUser from './pages/ConfigUser';

import {createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/support',
      element: <SupportPage />,
    },
    {
      path: '/aboutus',
      element: <AboutusPage />,
    },
    // {
    //   path: '/login',
    //   element: <LoginPage />,
    // },
    // {
    //   path: '/register',
    //   element: <RegisterPage />,
    // },
    // {
    //   path: '/forgotpassword',
    //   element: <ForgotPasswordPage />,
    // },
    // {
    //   path: '/changepassword',
    //   element: <ChangePasswordPage />,
    // },
    // {
    //   path: '/profile',
    //   element: <ProfilePage />,
    // },
    // {
    //   path: '/config',
    //   element: <ConfigUser />,
    // },
    // {
    //   path: '/compare',
    //   element: <ComparePage />,
    // },
    {
      path: '*',
      element: <ErrorPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);