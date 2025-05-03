import React from "react";
import Header from "../Layouts/Header";
import "../App.css";

import { Navigate, Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <Navigate to={"/category/0"}></Navigate>
    </>
  );
};

export default Home;
