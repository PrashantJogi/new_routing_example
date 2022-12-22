import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Component/error-page";
import "./index.css";
import Root from "./Component/root";
import Contact from "./Component/contact";
import { loader as rootLoader } from "./Component/root";
import Home from "./Image_Components/Home";
import Routing from "./Image_Components/Routing";
import AboutUS from "./Image_Components/AboutUS";
import ContactUS from "./Image_Components/ContactUS";
import Gallery from "./Image_Components/Gallery";
import ImageComponent from "./Image_Components/ImageComponent";
import CommentComponent from "./Image_Components/CommentComponent";

const newRouter = createBrowserRouter([
  {
    path: "/",
    element: <Routing />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/AboutUS",
        element: <AboutUS />,
      },
      {
        path: "/ContactUS",
        element: <ContactUS />,
      },
      {
        path: "/Gallery",
        element: <Gallery />,
      },
    ],
  },
  {
    path: "/Gallery/:id",
    element: <ImageComponent />,
  },
  { path: "/Gallery/:id/:id", element: <CommentComponent /> },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
//   // {
//   //   path: "contacts/:contactId",
//   //   element: <Contact />,
//   // },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={newRouter} />
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
