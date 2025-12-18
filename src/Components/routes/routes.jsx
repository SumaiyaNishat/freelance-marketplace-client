import { createBrowserRouter } from "react-router";
import Home from "../Home/Home";
import RootLayout from "./Layouts/RootLayout.jsx";
import AllJobs from "../AllJobs/AllJobs";

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
    ],
  },
]);
