import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Form, Input } from "antd";
import Operation from "antd/es/transfer/operation";
// import { MDBIcon } from "mdb-react-ui-kit";

const FormDef = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid grey;
  box-shadow: 2px 2px 2px grey;
  width: 40%;
  & > input {
    width: 50%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  & > select {
    width: 50%;
  }
`;

const FormDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 500px;
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

  const [array, setarray] = useState([]);
  const [options,setOptions]=useState('')
  const [formDatas, setFormDatas] = useState({
    email: "",
    name: "",
    date: "",
    num: "",
    check1: "",
    check2: "",
    check3: "",
    // countries:"",
  });

  const valueChange = (e) => {
    const { name, value } = e.target;
    setFormDatas({ ...formDatas, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setarray([...array, formDatas]);
    console.log(options);
  };

  return (
    <FormDiv>
      <FormDef onSubmit={formSubmit}>
        <input
          type="email"
          value={formDatas.email}
          onChange={valueChange}
          name="email"
        ></input>
        <input
          type="text"
          value={formDatas.name}
          onChange={valueChange}
          name="name"
        ></input>
        <div>
          one
          <input
            type="checkbox"
            // checked="checked"
            name="check1"
            value="one"
            onChange={valueChange}
          ></input>
          two
          <input
            type="checkbox"
            name="check2"
            value="two"
            onChange={valueChange}
          ></input>
          three
          <input
            type="checkbox"
            name="check3"
            value="three"
            onChange={valueChange}
          ></input>
        </div>
        <div>
          <input
            type="radio"
            name="num"
            value="four"
            onChange={valueChange}
          ></input>
          four
          <input
            type="radio"
            name="num"
            value="five"
            onChange={valueChange}
          ></input>
          five
        </div>
        <input
          type="date"
          name="date"
          value={formDatas.date}
          onChange={valueChange}
        ></input>
        <select
          name="countries"
          onChange={(e)=>setOptions(e.target.value)}
          value={options}
        >
          {dropDownData.map((e) => (
            <option>
              <span>{e.dial_code} </span>
              <span>{e.name}</span>
              {/* <span>{e.code}</span> */}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </FormDef>
      <div>
        {array.map((e) => (
          <div>
          <div>
            <h3>{e.email}</h3>
            <h3>{e.name}</h3>
            <h3>{e.date}</h3>
            <h3>{e.num}</h3>
            <h3>
              {e.check1} {e.check2} {e.check3}
            </h3>
          </div>
          <h3>{options}</h3>
          </div>
        ))}
      </div>
    </FormDiv>
  );
};

export const About = () => {
  return <div>About Page</div>;
};

export const Login = () => {
  return <div>
    <Form>
      <Form.Item style={{width:'300px'}} name={'teacher'} label="teachername">
        <Input placeholder='teacher name'/>
      </Form.Item>
      <Form.Item style={{width:'300px'}} name={'class'} label="classname">
        <Input placeholder='class name'/>
      </Form.Item>
      <Form.List>
        {(fields,Operation)=>(
          <>
          {fields.map((field,index)=>{
            return(
              <Form.Item style={{width:'300px'}} name={'class'} label="classname">
        <Input placeholder='class name'/>
      </Form.Item>
            )
          })}
          </>
        )}
      </Form.List>
    </Form>
  </div>;
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
