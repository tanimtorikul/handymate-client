import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Components/Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Services from "../Pages/Services/Services";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import AddServices from "../Pages/Dashboard/AddServices";
import MyServices from "../Pages/Dashboard/MyServices";
import MySchedules from "../Pages/Dashboard/MySchedules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/serviceDetail/:serviceId",
        element: (
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/services/${params.serviceId}`),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "my-services",
        element: <MyServices></MyServices>,
      },
      {
        path: "add-services",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "my-schedules",
        element: <MySchedules></MySchedules>,
      },
    ],
  },
]);

export default router;
