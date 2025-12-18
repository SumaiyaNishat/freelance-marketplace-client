import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
