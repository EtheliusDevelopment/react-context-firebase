import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, setUser, signOutUser } = useContext(userContext);

  const handleClickLogOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Inizio</NavLink>
          <button onClick={handleClickLogOut}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
