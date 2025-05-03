import React, { useEffect, useState } from "react";
import LeftSidebar from "../Layouts/LeftSidebar";
import Header from "../Layouts/Header";
import "../App.css";
import RightSidebar from "../Layouts/RightSidebar";
import { useLoaderData, useParams } from "react-router";
import News from "../Component/News";

const Category = () => {
  const data = useLoaderData();
  const { catid } = useParams();
  const [news, setNews] = useState();

  useEffect(() => {
    if (catid == 0) {
      setNews(data);
    } else if (catid == 1) {
      const todaysPick = data.filter(
        (news) => news?.others?.is_today_pick === true
      );
      setNews(todaysPick);
    } else {
      const newsByCategory = data.filter((news) => news.category_id == catid);
      setNews(newsByCategory);
    }
  }, [catid, data]);

  return (
    <>
      <Header></Header>
      <div className="main max-w-7xl mx-auto grid grid-cols-10 gap-5">
        <section className="col-span-2">
          <LeftSidebar></LeftSidebar>
        </section>

        <section className="main col-span-6 space-y-5">
          <h1 className="text-xl bg-secondary p-3">
            Total news <span className="text-red-800"> {news?.length}</span>
          </h1>
          {news?.map((singleNews) => (
            <News key={singleNews?.id} news={singleNews}></News>
          ))}
        </section>

        <section className="col-span-2">
          <RightSidebar></RightSidebar>
        </section>
      </div>
    </>
  );
};

export default Category;
