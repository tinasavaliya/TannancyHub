import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('role'));

  // Check if the user is not logged in or the role is not 'admin'
  // if (!user || user !== role) {
  //   return <Navigate to="/login" />;
  // }
if (!user || (role === 'admin' && user !== 'admin')) {
    return <Navigate to="/login" />;
  }
  // If the user is logged in and has the correct role, render the children (the protected component)
  return children;
};

export default ProtectedRoute;
