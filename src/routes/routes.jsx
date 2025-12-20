import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home.jsx";
import RootLayout from "../Layouts/RootLayout.jsx";
import AllJobs from "../Pages/AllJobs/AllJobs.jsx";
import AddJob from "../Pages/AddJob/AddJob.jsx";
import MyTasks from "../Pages/MyTasks/MyTasks.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Components/Login/Login.jsx";
import Register from "../Components/Register/Register.jsx";
import JobDetails from "../Pages/JobDetails/JobDetails.jsx";
import UpdateJob from "../Pages/UpdateJob/UpdateJob.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("http://localhost:3000/freelance"),
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/freelance/${params.id}`),
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/freelance/${params.id}`),
      },
      {
        path: "/myAcceptedTasks,",
        element: <MyTasks></MyTasks>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
