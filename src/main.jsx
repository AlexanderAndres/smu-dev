import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import store from './app/store'
import { Provider } from 'react-redux'
import Login from './components/login/Login'
import ViewLocal from './views/viewLocal/ViewLocal'

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/app", element: <App /> },
  { path: '/local/:ceco', element: < ViewLocal /> }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
