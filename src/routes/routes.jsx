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
import PrivateRoute from "./PrivateRoute.jsx";
import MyAddedJobs from "../Pages/MyAddedJobs/MyAddedJobs.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('http://localhost:3000/latest-freelance')
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("http://localhost:3000/freelance"),
      },
      {
        path: "/addJob",
        element: (<PrivateRoute><AddJob></AddJob></PrivateRoute>),
      },
      {
        path: "/jobDetails/:id",
        element: (<PrivateRoute><JobDetails></JobDetails></PrivateRoute>),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/freelance/${params.id}`),
      },
      {
        path:'/myJob',
        element:(<PrivateRoute>
          <MyAddedJobs></MyAddedJobs>
        </PrivateRoute>)
      },
      {
        path: "/updateJob/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/freelance/${params.id}`),
      },
      {
        path: "/myAcceptedTasks",
        element: (<PrivateRoute><MyTasks></MyTasks></PrivateRoute>)
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
     errorElement: <ErrorPage />,
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
