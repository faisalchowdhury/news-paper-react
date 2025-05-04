import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [headline, setHeadline] = useState([]);

  // Create User
  const formSubmit = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // observer
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);

    setLoading(false);
  });

  // Login

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut

  const signOutUser = () => {
    return signOut(auth);
  };

  // github Login

  const githubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // google Login
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const userInfo = {
    formSubmit,
    user,
    signOutUser,
    loginUser,
    loading,
    setHeadline,
    headline,
    githubLogin,
    googleLogin,
  };

  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
