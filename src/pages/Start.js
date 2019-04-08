import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import Login from "../components/Auth/Login";
import Context from "../context";

const Start = () => {
  const { state } = useContext(Context);
  return state.isAuthenticated ? <Redirect to="/" /> : <Login />;
};

export default Start;
