import React from "react";
import { Route } from "react-router-dom";

export const Comp1 = () => {
  return <div>This is comp1</div>;
};
export const Comp2 = () => {
  return <div>This is comp2</div>;
};

export const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {return auth && <Component {...props} /> 
    //    <Redirect to="/comp1" />
      }}
    />
  );
};
