import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const AppLayout = () => {
  // console.log(<Body />);
  return (
    <div className="app">
      <Header />
      {/** if path = /  */}
      {/* <Body /> */}
      {/** if path = /about  */}
      {/* <About /> */}
      {/** if path = /contact  */}
      {/* <Contact /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },
  // {
  //   path: '/contact',
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
