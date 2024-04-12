// Main page from react and import functionality
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import router from dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import all url from app .jsx
import Navbar from './components/Navbar';
import About from "./pages/About/About";
import Banner from "./components/Banner";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer.jsx";
// uses the DOM History API to update the URL and manage the history stac
const router = createBrowserRouter([
  {

    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Navbar/>
      },
      {
        path: "/banner",
        element: <Banner/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "footer",
        element: <Footer/>
      },
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)