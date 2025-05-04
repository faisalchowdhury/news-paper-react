import React from "react";
import "../App.css";

import { Navigate } from "react-router";

const Home = () => {
  return (
    <>
      <Navigate to={"/category/0"}></Navigate>
    </>
  );
};

export default Home;
