import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const DivForm=styled.div`
display:grid;
place-items:center;
height:80dvh;
`;

export const Comp1 = () => {
  return <div>This is comp1</div>;
};

export const Comp2 = ({setBtnLog ,btnLog}) => {

  const onFinish = (values) => {
    console.log('Success:', values);
    if(values.username=='vishal' && values.password=='123'){
      setBtnLog(!btnLog)
    }
    else{
      alert("invalid username or password")
    }
  }
  const btnUnsubscribe=()=>{
     if(btnLog==true){
      setBtnLog(!btnLog)
     }
  }

  return (
    <DivForm>
      <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
    id="username"
      label="Username"
      name="username"
      className="textInput"
      value="vishal"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
    id="password"
      label="Password"
      name="password"
      className="passwordInput"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>name: vishal pass: 123</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
      <div style={{display:'flex'}}>
        <Button className="subBtn" type="primary" htmlType="submit">
        Login
      </Button>
      <Link to="/drawer">
      <Button>Move to Drawer</Button>
      </Link>
      <span></span>
      <Button className="unSubBtn" type="primary" onClick={btnUnsubscribe} >
        Logout
      </Button>
      </div>
    </Form.Item>
  </Form>
  </DivForm>
);
};

export const ProtectedRoute = ({btnLog}) => {
    let auth={'token':btnLog}
  return (
    auth.token?<Outlet/>:<Navigate to='/login'/>
  );
};
