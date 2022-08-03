import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../ContextApi/AuthProvider";

function SignInRoute({ children }) {
  const isAuthenticated = useCreateAuthStateContext();
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default SignInRoute;
