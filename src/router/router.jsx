import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/SignIn/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/ApplyJobs/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
        loader: ({params})=> fetch(`https://bd-career-code-server-2025.vercel.app/jobs/${params.id}`)
      },
      {
        path: 'jobApply/:id',
        element: <PrivetRoute><JobApply/></PrivetRoute>
      },
      {
        path: 'myApplications',
        element: <PrivetRoute><MyApplications/></PrivetRoute>
      },
      {
        path: 'addJob',
        element: <PrivetRoute><AddJobs></AddJobs></PrivetRoute>
      },
      {
        path: 'myPostedJobs',
        element: <PrivetRoute><MyPostedJobs/></PrivetRoute>
      },
      {
        path: 'applications/:job_id',
        element: <PrivetRoute><ViewApplications/></PrivetRoute>,
        loader:({params})=> fetch(`https://bd-career-code-server-2025.vercel.app/applications/job/${params.job_id}`)
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
