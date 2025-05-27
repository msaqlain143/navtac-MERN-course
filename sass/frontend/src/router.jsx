import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./layouts/Auth.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
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
        element: <ProtectedRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

export default router;
