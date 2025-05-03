import React from "react";
import LeftSidebar from "../Layouts/LeftSidebar";
import Header from "../Layouts/Header";
import "../App.css";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="main max-w-7xl mx-auto grid grid-cols-10">
        <section className="col-span-2">
          <LeftSidebar></LeftSidebar>
        </section>

        <section className="main col-span-6">sds</section>

        <section className="col-span-2">asd</section>
      </div>
    </>
  );
};

export default Home;
