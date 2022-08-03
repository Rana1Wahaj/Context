import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../ContextApi/AuthProvider";

function AuthProtectedRoute({ children }) {
  const isAuthenticated = useCreateAuthStateContext();
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default AuthProtectedRoute;
