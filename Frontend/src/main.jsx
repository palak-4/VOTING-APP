import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Terms from './pages/Terms.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Terms & Conditions",
    element: <Terms/>,
  },
  {
    path: "Privacy",
    element: <PrivacyPage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
