import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/404/ErrorPage';
import ChefDetails from '../pages/ChefDetails/ChefDetails';
import PrivateRoute from './PrivateRoute';
import Blogs from '../pages/Blogs/Blogs';

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
              path:'/chef-details/:id',
              element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
              loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
              path:'/blog',
              element:<Blogs></Blogs>
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