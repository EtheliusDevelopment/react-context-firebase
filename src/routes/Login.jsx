import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Login = () => {
  const [email, setEmail] = useState("andrea@andrea.com");
  const [password, setPassword] = useState("andrea");
  const { loginUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/");
      console.log('USUARIO LOGGATO');
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Inserisci email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Inserisci Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
