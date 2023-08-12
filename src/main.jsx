import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import BookingRequest from "./pages/BookingRequest.jsx";
import HotelManagement from "./pages/HotelManagement.jsx";
import OfferInfo from "./pages/OfferInfo.jsx";
import Settings from "./pages/Settings.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/booking-request",
        element: <BookingRequest />,
      },
      {
        path: "/hotel-management",
        element: <HotelManagement />,
      },
      {
        path: "/offer-info",
        element: <OfferInfo />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
