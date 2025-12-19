import { createBrowserRouter } from "react-router";
import Home from "../Components/Home/Home.jsx";
import RootLayout from "../Layouts/RootLayout.jsx";
import AllJobs from "../Components/AllJobs/AllJobs.jsx";
import AddJob from "../Components/AddJob/AddJob.jsx";
import MyTasks from "../Components/MyTasks/MyTasks.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import Login from "../Components/Login/Login.jsx";
import Register from "../Components/Register/Register.jsx";

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
        path: 'allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: 'addJob',
        element: <AddJob></AddJob>
      },
      {
        path: 'myAcceptedTasks,',
        element: <MyTasks></MyTasks>
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
