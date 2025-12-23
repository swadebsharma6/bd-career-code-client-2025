import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/SignIn/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/ApplyJobs/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:'/jobs/:id',
        Component: JobDetails,
        loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: 'jobApply/:id',
        element: <PrivetRoute><JobApply/></PrivetRoute>
      },
      {
            path: 'register',
            Component: Register
      },
      {
            path: 'signin',
            Component: Signin
      }
    ],
  },
]);

export default router;
