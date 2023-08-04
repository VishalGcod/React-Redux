import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledNavbar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  font-weight:600;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size:25px;

  &:hover {
    background-color: #555;
  }
`;
export const Data=()=> {
  return (
    <div>Data Page</div>
  )
}

export const About=()=> {
    return (
      <div>About Page</div>
    )
  }
  
  export const Login=()=> {
    return (
      <div>Login Page</div>
    )
  }
  
export const Navbar=()=> {
  return (
    <StyledNavbar>
      <div>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
      </div>
      <div>
        <Link to="data">
          <NavLink>Data</NavLink>
        </Link>
        <Link to="about">
          <NavLink>About</NavLink>
        </Link>
        <Link to="login">
          <NavLink>Login</NavLink>
        </Link>
      </div>
    </StyledNavbar>
  );
}
