import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="sticky top-5 md:h-screen">
      <aside className="">
        <div className="join join-vertical w-full ">
          {data.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className="btn join-item flex justify-start">
              {category.name}
            </NavLink>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default LeftSidebar;
