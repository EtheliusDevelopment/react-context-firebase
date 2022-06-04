import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserProvider";

const Register = () => {
  const { registerUser } = useContext(userContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      navigate("/");
    } catch (error) {
      console.error(error.code);
    }
  };

  //  const handleSubmit = async (e) => {
  //    e.preventDefault();
  //    try {
  //      await registerUser(email, password);
  //      navigate("/");
  //    } catch (error) {
  //      console.error(error.code);
  //    }
  //  };

  return (
    <>
      <h1>Registser</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Inserisci email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Inserisci Password"
          {...register("password", {
            minLength: {
              value: 6,
              message: "Minimo 6 caratteri",
            },
            validate: {
              trim: (v) => {
                if (!v.trim()) return "Password non può essere vuota";
                true;
              },
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="password"
          placeholder="Reinserisci Password"
          {...register("repassword", {
            validate: {
              equals: (v) =>
                v === getValues("password") || "Passwords must match",
              //   message: "Password non corrispondenti",
            },
          })}
        />
        {errors.repassword && <p>{errors.repassword.message}</p>}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
