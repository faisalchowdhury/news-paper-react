import React, { useContext, useState } from "react";
import Header from "../Layouts/Header";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const Registration = () => {
  const { formSubmit } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo_url = e.target.photo_url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;

    if (password !== confirm_password) {
      setError("Password and Confirm Password are not matched");
      return;
    }
    formSubmit(email, password)
      .then((result) => {
        console.log(result);
        setError("");
        // Update User
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => console.log("profile updated"))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header></Header>
      <div>
        <div className="my-10 card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-xl">Register now</h3>
            <form onSubmit={handleForm} className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Write your name"
                name="name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />

              <label className="label">Photo Url</label>
              <input
                type="text"
                className="input"
                placeholder="Photo Url"
                name="photo_url"
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
              />

              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="confirm_password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-red-600">{error ? error : null}</p>
            </form>
            <div>
              <p>
                Already created account ?{" "}
                <Link className="text-primary" to={"/login"}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
