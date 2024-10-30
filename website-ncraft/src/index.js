import React from 'react';
import ReactDOM from 'react-dom/client';

import { HomePage } from "./pages/homePage/home";
import { SupportPage } from "./pages/supportPage/support";
// import { LoginPage } from "./pages/loginPage/login";
// import { RegisterPage } from "./pages/registerPage/register";
// AboutusPage

import {createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/404Page/errorpage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/support',
        element: <SupportPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);