import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Register = () => {
  const [email, setEmail] = useState("andrea@andrea.com");
  const [password, setPassword] = useState("andrea");
  const { registerUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(email, password);
      navigate("/");
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <>
      <h1>Registser</h1>
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
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
