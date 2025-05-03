import React from "react";
import logo from "/logo.png";
import user from "/user.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";

const Header = () => {
  const dateStructure = format(new Date(), "EEEE , MMMM M , yyyy");
  console.log(dateStructure);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-2 py-5 ">
          <img className="w-[200px]" src={logo} alt="" />
          <h1 className="text-slate-500 text-xl">
            Your World, Your Voice, Your News.
          </h1>
          <p>{dateStructure}</p>
        </div>

        <div className="bg-secondary p-3 flex items-center gap-5">
          <button className="btn btn-accent text-white rounded-none">
            Latest
          </button>
          <Marquee speed={70} pauseOnHover={true}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nulla,
            cum voluptas suscipit est, enim veritatis dignissimos odio sint
            assumenda numquam, fugiat expedita dicta tempore! Tempora officiis
            minus accusamus accusantium!
          </Marquee>
        </div>

        <div className="flex justify-between items-center py-5 ">
          <div></div>

          <div>
            <ul className="flex gap-5 ">
              <li>Home</li>
              <li>About</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-[30px]" src={user} alt="" />
            <button className="btn btn-primary rounded-none">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
