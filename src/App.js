import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import { SignUp } from './features/auth/components/SignUp';
import SignupPage from './pages/SignupPage';
// import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/Signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "/product-details",
    element: <ProductDetailsPage></ProductDetailsPage>,
  },
]);

// createRoot(document.getElementById("root")).render(
 
// );

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <LoginPage></LoginPage> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
