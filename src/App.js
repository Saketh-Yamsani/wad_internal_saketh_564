import React, { useState } from 'react';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/footer';
import RegisterForm from './components/register/register';
import LoginForm from './components/login/login';
import Catalog from './components/catalog/catalog';
import Cart from './components/cart/cart';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Main from './components/Main/Main';


function App() {
  let router = createBrowserRouter([
  {
  path:'',
  element:<Main/>,
  children:[
  {
  path:'',
  element:<About/>
  },
  {
  path:'login',
  element:<LoginForm/>
  },
  {
  path:'register',
  element: <RegisterForm/>
  },
  {
  path:'contact',
  element:<Contact/>
  },
  {
    path:'cart',
    element:<Cart/>
  },
  {
    path:'catalog',
    element:<Catalog/>
  },
  {
    path:'about',
    element:<About/>
  }
  ]
  }
  ])
  return (
  <div>
  <RouterProvider router={router}/>
  </div>
  );
  }
  export default App;