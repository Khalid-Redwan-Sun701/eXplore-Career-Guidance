import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider> */}

    {/* Can also be done in this way send as props */}
    <AuthProvider
      routes={<RouterProvider router={router}></RouterProvider>}
    ></AuthProvider>
  </StrictMode>
);
