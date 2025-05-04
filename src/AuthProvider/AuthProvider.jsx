import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Create User
  const formSubmit = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // observer
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // Login

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // SignOut

  const signOutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    formSubmit,
    user,
    signOutUser,
    loginUser,
  };

  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
