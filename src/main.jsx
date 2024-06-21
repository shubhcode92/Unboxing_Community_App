import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Header, PrepurchaseNav, Sidebar, SidebarMenu, ProductInfo, Queries, Repair, Replacement, Safety} from './components/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Repair />
      },
      {
        path: 'queries/repair',
        element: <Repair />
      },
      {
        path: 'queries/replacement',
        element: <Replacement />
      },
      {
        path: 'queries/safety',
        element: <Safety />
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
