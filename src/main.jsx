import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Local from './components/local/Local'

import store from './app/store'
import { Provider } from 'react-redux'
import Map from './components/map/NewMap'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/map", element: <Map /> },
  { path: '/local/:ceco', element: <Local /> }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
