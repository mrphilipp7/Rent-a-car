import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import { isLoggedInLoader } from "./lib/loaders";
import {
  LoginPage,
  ErrorPage,
  SignupPage,
  HomePage,
  SchedulePage,
  CustomerDetailsPage,
  CustomerDetailsIDPage,
  BranchPage,
  BranchErrorPage,
  BranchIDPage,
} from "./pages";

//   {
//     path: "/",
//     element: <LoginPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/register",
//     element: <SignupPage />,
//     errorElement: <ErrorPage />,
//   },
//   /* ----- app/... are routes for employees ----- */
//   {
//     path: "/app",
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     loader: isLoggedInLoader,
//     children: [
//       {
//         path: "",
//         element: <HomePage />,
//       },
//       {
//         path: "schedule/",
//         element: <Navigate to={`/app/schedule/${currentDate}`} replace />,
//       },
//       {
//         path: "schedule/:id",
//         element: <SchedulePage />,
//       },
//       {
//         path: "customerDetails",
//         element: <CustomerDetailsPage />,
//       },
//       {
//         path: "customerDetails/:id",
//         element: <CustomerDetailsIDPage />,
//       },
//       {
//         path: "branch",
//         element: <BranchPage />,
//       },
//       {
//         path: "branch/:id",
//         element: <BranchIDPage />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  /* ----- app/... are routes for employees ----- */
  {
    path: "/app",
    element: <Layout />,
    loader: isLoggedInLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "customerDetails",
        element: <CustomerDetailsPage />,
      },
      {
        path: "customerDetails/:id",
        element: <CustomerDetailsIDPage />,
      },
      {
        path: "branch",
        element: <Layout />,
        errorElement: <BranchErrorPage />, // Error handled here for /branch and its immediate children
        children: [
          {
            path: "",
            element: <BranchPage />,
          },
          {
            path: ":id",
            element: <Layout />,
            errorElement: <BranchErrorPage />, // Specify errorElement here for /branch/:id and its children
            children: [
              {
                path: "",
                element: <BranchIDPage />,
              },
              {
                path: "schedule/:id",
                element: <SchedulePage />,
                errorElement: <BranchErrorPage />, // Also specify here if needed
              },
            ],
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
