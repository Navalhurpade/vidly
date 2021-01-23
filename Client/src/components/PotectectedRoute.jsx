import { log } from "joi-browser";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from "./../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getCurrentUser()) {
          console.log("returned !", getCurrentUser());
          return <Redirect to="/login" />;
        }
        if (Component) return <Component {...props} />;
        else render(props);
      }}
    />
  );
};

export default ProtectedRoute;
