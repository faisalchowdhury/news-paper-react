import React from "react";
import Header from "../Layouts/Header";
import RightSidebar from "../Layouts/RightSidebar";
import { NavLink, useLoaderData, useParams } from "react-router";
import { FaStar, FaEye } from "react-icons/fa";

const SingleNews = () => {
  const { newsId } = useParams();
  const newsData = useLoaderData();

  const singleNewsData = newsData.find(
    (singleNews) => singleNews.id === newsId
  );

  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-5">
        <section className="col-span-3">
          <div className="space-y-5 shadow p-5 rounded-lg">
            <h1 className="text-2xl">{singleNewsData.title}</h1>
            <img
              className="w-full h-[400px] object-cover"
              src={singleNewsData.image_url}
              alt=""
            />
            <div className="flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src={singleNewsData.author.img}
                alt=""
              />{" "}
              {singleNewsData.author.name}
            </div>

            <p>{singleNewsData.details}</p>
            <div className="flex justify-between">
              <h4 className="flex items-center">
                {Array.from({ length: singleNewsData.rating.number }).map(
                  (_, i) => (
                    <FaStar key={i} color="orange"></FaStar>
                  )
                )}
                ({singleNewsData.rating.number})
              </h4>

              <div className="flex items-center gap-2">
                <FaEye></FaEye>
                <p>{singleNewsData.total_view}</p>
              </div>
            </div>

            <NavLink
              className="btn bg-accent text-white"
              to={`/category/${singleNewsData.category_id}`}>
              Back To Category
            </NavLink>
          </div>
        </section>

        <aside className="col-span-1">
          <RightSidebar></RightSidebar>
        </aside>
      </div>
    </>
  );
};

export default SingleNews;
