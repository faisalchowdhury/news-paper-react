import React, { useContext } from "react";
import Header from "../Layouts/Header";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();

  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(location.state || "/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Header></Header>
      <div>
        <div className="my-10 card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-xl">Login now</h3>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p>
              Dont have an account ?{" "}
              <Link className="text-primary" to={"/registration"}>
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
