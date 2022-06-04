import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Inizio</NavLink>
          <button onClick={() => setUser(false)}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
