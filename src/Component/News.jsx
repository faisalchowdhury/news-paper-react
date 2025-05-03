import React from "react";
import { FaUser } from "react-icons/fa6";

const News = ({ news }) => {
  console.log(news);
  return (
    <>
      <div className="space-y-5 shadow p-5 rounded-lg">
        <h1 className="text-xl">{news.title}</h1>
        <img
          className="w-full h-[400px] object-cover"
          src={news.thumbnail_url}
          alt=""
        />
        <div className="flex items-center gap-3">
          <FaUser></FaUser> {news.author.name}
        </div>

        <p>
          {news.details.length > 200 ? (
            <>
              {news.details.slice(0, 200)}
              ...
              <button className="text-blue-700">Read More</button>
            </>
          ) : (
            news.details
          )}
        </p>
      </div>
    </>
  );
};

export default News;
