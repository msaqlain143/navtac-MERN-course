import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Logic.jsx";
import Auth from "./layouts/Auth.jsx";
import VerifyAccount from "./pages/VerifyAccount.jsx";
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
]);

export default router;
