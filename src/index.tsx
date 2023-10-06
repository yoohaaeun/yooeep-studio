import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AllProducts from './pages/AllProducts';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import ProtectedRoute from './pages/ProtectedRoute';
import MyCart from './pages/MyCart';
import MyWishList from './pages/MyWishList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/category/new', element: <AllProducts /> },
      { path: '/category/outer', element: <AllProducts /> },
      { path: '/category/knitwear', element: <AllProducts /> },
      { path: '/category/top', element: <AllProducts /> },
      { path: '/category/dresses', element: <AllProducts /> },
      { path: '/category/shoes', element: <AllProducts /> },
      { path: '/category/accessories', element: <AllProducts /> },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: '/wish_list',
        element: (
          <ProtectedRoute>
            <MyWishList />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
