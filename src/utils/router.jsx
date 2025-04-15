import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../components/MainLayout/MainLayout';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import BookOnline from '../components/BookOnline/BookOnline';
import Profile from '../components/Profile/Profile';
import Blogs from '../components/Blogs/Blogs';
import DetailsService from '../components/DetailsService/DetailsService';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          // load service data
          const serviceResponse = await fetch('/service.json');
          const serviceData = await serviceResponse.json();

          // load blog data
          const blogResponse = await fetch('/blog.json');
          const blogData = await blogResponse.json();

          return { serviceData, blogData };
        },
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/services',
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
        loader: () => fetch('/service.json'),
      },
      {
        path: '/blogs',
        element: (
          <PrivateRoute>
            {' '}
            <Blogs></Blogs>{' '}
          </PrivateRoute>
        ),
        loader: () => fetch('/blog.json'),
      },
      {
        path: '/book-online',
        element: <BookOnline></BookOnline>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },
      {
        path: '/detailsService/:id',
        element: (
          <PrivateRoute>
            <DetailsService></DetailsService>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch('/service.json');
          const data = await res.json();
          // console.log(data);
          const found_data = data.find((service) => service.id == params.id);
          // console.log(found_data);

          return found_data;
        },
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
