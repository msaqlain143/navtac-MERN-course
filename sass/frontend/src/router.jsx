import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./layouts/Auth.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
import PrincipalDashboard from "./pages/PrincipalDashboard";
import StudentsDashboard from "./pages/StudentsDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Owner from "./layouts/Owner.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify",
        element: <VerifyAccount />,
      },
    ],
  },
  {
    path: "/owner",
    element: <Owner />,
    children: [
      {
        element: <ProtectedRoutes role={["OWNER"]} />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/principal",
    element: <Owner />,
    children: [
      {
        element: <ProtectedRoutes role={["PRINCIPAL"]} />,
        children: [
          {
            path: "dashboard",
            element: <PrincipalDashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/teacher",
    element: <Owner />,
    children: [
      {
        element: <ProtectedRoutes role={["TEACHER"]} />,
        children: [
          {
            path: "dashboard",
            element: <TeacherDashboard />,
          },
        ],
      },
    ],
  },
  {
    path: "/student",
    element: <Owner />,
    children: [
      {
        element: <ProtectedRoutes role={["STUDENT"]} />,
        children: [
          {
            path: "dashboard",
            element: <StudentsDashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
