import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import redux tool kit
import { Provider } from 'react-redux';
import store from './App/features/store.js';
// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './App/routers/Root.jsx';
import ErrorPage from './App/pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
