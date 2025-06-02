import React, { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ role }) => {
  const { auth } = useContext(AuthContext);
  console.log("ProtectedRoutes auth:", auth);
  return auth?.accessToken && role?.includes(auth?.user?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  );
};

export default ProtectedRoutes;
