import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router";

const News = ({ news }) => {
  return (
    <>
      <div className="space-y-5 shadow p-5 rounded-lg">
        <h1 className="text-xl">{news.title}</h1>
        <img
          className="w-full h-[400px] object-cover"
          src={news.image_url}
          alt=""
        />
        <div className="flex items-center gap-3">
          <img className="w-8 h-8 rounded-full" src={news.author.img} alt="" />{" "}
          {news.author.name}
        </div>

        <p>
          {news.details.length > 200 ? (
            <>
              {news.details.slice(0, 200)}
              ...
              <NavLink to={`/single-news/${news.id}`} className="text-blue-700">
                Read More
              </NavLink>
            </>
          ) : (
            news.details
          )}
        </p>
        <div className="flex justify-between">
          <h4 className="flex items-center">
            {Array.from({ length: news.rating.number }).map((_, i) => (
              <FaStar key={i} color="orange"></FaStar>
            ))}
            ({news.rating.number})
          </h4>

          <div className="flex items-center gap-2">
            <FaEye></FaEye>
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
