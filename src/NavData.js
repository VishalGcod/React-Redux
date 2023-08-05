import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
// import { MDBIcon } from "mdb-react-ui-kit";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledNavbar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  font-weight: 600;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 25px;

  &:hover {
    background-color: #555;
  }
`;
export const Data = () => {
  const [dropDownData, getDropDownData] = useState([]);
  const [country, setCountry] = useState("");
  const dropDown = () => {
    axios
      .get("http://localhost:8000/countries")
      .then((res) => {
        getDropDownData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dropDown();
  }, []);

  const setCountryCode = () => {
    setCountry();
  };

  return (
    <div>
      <Form>
        <input type="email"></input>
        <input type="email"></input>
        one<input type="checkbox" checked="checked"></input>
        two<input type="checkbox"></input>
        three<input type="checkbox"></input>
        <input type="radio" name="fav_language" value="HTML"></input>four
        <input type="radio" name="fav_language" value="HTML"></input>five
        <input type="date"></input>
        <select name="countries" onChange={setCountryCode}>
          {dropDownData.map((e) => (
            <option value="countries" selected>
              <span>{e.dial_code}</span>
              <span>{e.name}</span>
              <span>{e.code}</span>
            </option>
          ))}
        </select>
        <button>Submit</button>
      </Form>
    </div>
  );
};

export const About = () => {
  return <div>About Page</div>;
};

export const Login = () => {
  return <div>Login Page</div>;
};

export const Navbar = () => {
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
};
