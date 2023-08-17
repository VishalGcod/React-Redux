import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const Comp1 = () => {
  return <div>This is comp1</div>;
};
export const Comp2 = () => {
  return <div>This is comp2</div>;
};

export const ProtectedRoute = ({btnLog}) => {
    let auth={'token':true}
  return (
    auth.token?<Outlet/>:<Navigate to='/'/>
  );
};
