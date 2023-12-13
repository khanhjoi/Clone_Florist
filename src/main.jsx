import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import redux tool kit
import { Provider } from "react-redux";
import store from "./App/features/store.js";
// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./App/routers/Root.jsx";
import { MainPage, ErrorPage, AboutPage} from './App/pages/index.js'
import ServicesPage from "./App/pages/ServicesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "home",
        element: <MainPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicesPage/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
