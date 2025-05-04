import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
