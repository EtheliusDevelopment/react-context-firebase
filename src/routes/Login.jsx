import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Login = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const handleClickLogin = () => {
    setUser(true);
    navigate("/");
  };

  return (
    <>
      <h1>Login</h1>
      {user ? <h2>Benvenuto {user.name}</h2> : <h2>Offline</h2>}
      <button onClick={handleClickLogin}>Accedi</button>
    </>
  );
};

export default Login;
