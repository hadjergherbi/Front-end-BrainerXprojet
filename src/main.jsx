import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SingIn from './components/SingIn/SingIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/SignIn",
    element:<SingIn/>
  },
   {
    path:"/SignUp",
    element:<SignUp/>
  },
  {
    path:"/Profile",
    element:<Profile/>

  }

  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
