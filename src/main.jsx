import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Local from './components/local/Local'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: '/local/:ceco', element: <Local /> }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
