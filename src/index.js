import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './app/store';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import SuccessSignup from './pages/SuccessSignup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sign-in',
    element: <Signin />
  },
  {
    path: '/sign-up',
    element: <Signup />
  },
  {
    path: '/sign-up/success',
    element: <SuccessSignup />
  },
  {
    path: '/profile',
    element: <Profile />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

