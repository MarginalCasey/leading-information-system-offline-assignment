import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
