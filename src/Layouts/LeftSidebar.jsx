import React, { useEffect, useState } from "react";

const LeftSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <aside>
        <div className="join join-vertical w-full">
          {data.map((category) => (
            <button className="btn join-item flex justify-start">
              {category.name}
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default LeftSidebar;
