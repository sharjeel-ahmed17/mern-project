import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Logout from './components/Logout';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      hello world
    </div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/product",
    element: <ProductList />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/add-product",
    element: <AddProduct />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
