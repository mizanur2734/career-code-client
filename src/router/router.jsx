import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";
import MyApplication from "../pages/MyApplication/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoutes>
            <MyApplication></MyApplication>
          </PrivateRoutes>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
