import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import ErrorPage from './Pages/ErrorPage';
import AllRout from './RootLayOut/AllRout';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllRout></AllRout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        element: <Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)