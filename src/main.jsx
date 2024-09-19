import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import "./index.css"
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';
import SingleProducts from './pages/SingleProducts.jsx';




// protected route
// dynamic route
// nested route

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        element: <Home /> 
      },
      {
        path: 'about', 
        element: <About />
      },
      {
        path: 'SingleProducts/:id', 
        element: <SingleProducts />
      },
      {
        path: 'shop', 
        element: <Shop />
      },
      {
        path: 'contact', 
        element: <Contact />
      },
      {
        path: "*",
        element: <h1>Not found!</h1>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)


// layout ki file root banaka outlet ka componenet render krwana haa
// router ka variable banayaa jiska undar createBroweserRouter ka function call krka aik array of object dedi
// router provider ka component call krwaka uska undar poori app pass krdi.