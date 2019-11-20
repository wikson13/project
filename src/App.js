import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Counter from "./Counter/Counter";
import Login from "./Login/Login";
import Currency from "./Currency/Currency";

function App() {
  return (
    <BrowserRouter>
      <Link to="/counter">Counter</Link>
      <Link to="/login">Login</Link>
      <Link to="/currency">Currency</Link>
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/currency" component={Currency} />
    </BrowserRouter>
  );
}

export default App;
