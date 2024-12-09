import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});

const Hook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />

      <input {...register("email")} placeholder="email" type="email" required />
      <p>{errors.email?.message}</p>
      <br />

      <input
        {...register("password")}
        placeholder="password"
        type="password"
        required
      />
      <p className="text-red-600">{errors.password?.message}</p>
      <input {...register("name")} placeholder="name"  />
      <p className="text-red-600">{errors?.name?.message}</p>
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Hook;
