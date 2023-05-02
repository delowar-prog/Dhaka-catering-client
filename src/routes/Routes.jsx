import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/404/ErrorPage';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
        {
          path: "/",
          element:<MainLayout></MainLayout>,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "/",
              element: <Home />,
              loader:()=>fetch('http://localhost:5000/services')
            },
            {
              path:'/chef-details',
              element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/register',
              element:<Register></Register>
            },
          ],
        },
      ]);


export default router