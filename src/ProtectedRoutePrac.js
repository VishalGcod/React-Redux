import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';


export const Comp1 = () => {
  return <div>This is comp1</div>;
};

export const Comp2 = ({setBtnLog ,btnLog}) => {

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(values.username);
    console.log(values.password);
    if(values.username=='vishal' && values.password=='123'){
      setBtnLog(!btnLog)
    }
  }

  return (
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
      label="Username"
      name="username"
      className="textInput"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
};

export const ProtectedRoute = ({btnLog}) => {
    let auth={'token':btnLog}
  return (
    auth.token?<Outlet/>:<Navigate to='/'/>
  );
};
