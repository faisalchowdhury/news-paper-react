import React, { useContext } from "react";
import logo from "/logo.png";
import user from "/user.png";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
import { Link, NavLink, useLocation, useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const Header = () => {
  const { user, signOutUser, headline } = useContext(AuthContext);

  const dateStructure = format(new Date(), "EEEE , MMMM M , yyyy");
  const location = useLocation();
  const { catid } = useParams();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-2 py-5 ">
          <Link to={"/"}>
            {" "}
            <img className="w-[200px]" src={logo} alt="" />
          </Link>
          <h1 className="text-slate-500 text-xl">
            Your World, Your Voice, Your News.
          </h1>
          <p>{dateStructure}</p>
        </div>
        {location.pathname == `/category/${catid}` ? (
          <div className="bg-secondary p-3 flex items-center gap-5">
            <button className="btn btn-accent text-white rounded-none">
              Latest
            </button>

            <Marquee speed={70} pauseOnHover={true}>
              {headline.map((heading) => (
                <p>{heading} |</p>
              ))}
            </Marquee>
          </div>
        ) : null}

        <div className="flex justify-between items-center py-5 ">
          <div className="flex items-center gap-3">
            {user && (
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
            {user ? (user.email ? user.email : user.displayName) : null}
          </div>

          <div>
            <ul className="flex gap-5 ">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>About</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <img className="w-[30px]" src={user} alt="" />

            {!user ? (
              <Link to={"/login"} className="btn btn-primary rounded-none">
                Login
              </Link>
            ) : (
              <button
                className="btn btn-accent rounded-none text-white"
                onClick={signOutUser}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
