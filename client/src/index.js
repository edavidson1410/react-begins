import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import HomePage from './pages/HomePage';
import Counter from './pages/Counter';
import Weather from './pages/Weather';
import { NavBar } from './components/NavBar';

const router = createBrowserRouter([
  {
      path: "/",
      element: <HomePage />,
  },
  {
      path: "/counter",
      element: <Counter />,
  },
  {
    path: "/weather",
    element: <Weather />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
