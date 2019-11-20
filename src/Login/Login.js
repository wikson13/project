import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <TextField label="Login" margin="normal" />
      <TextField label="Password" margin="normal" />
    </>
  );
};

export default Login;
