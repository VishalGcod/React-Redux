import React, { useState } from 'react';
import './index.css';
import { Drawer } from 'antd';
import { styled } from 'styled-components';

export const InputField = styled.input`
  padding: 7px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  width:290px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
export const SubmitButton = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width:250px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const FormContainer = styled.form`
  max-width: 400px
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height:50px;
`;

export const FormDrawer= ({setOpen,open,setDataItems,dataItems}) => {
  const [formData, setFormData] = useState({
    label: "",
    lname: "",
    mail: "",
  });

  const onClose = () => {
    setOpen(false);
  };

  const inputInformations = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    console.log(formData.label);
    console.log(formData.lname);
    const check=dataItems.find((e)=>e.label === formData.label && e.lname === formData.lname )
    if(check){
    alert("user already present");
    }else{
    setDataItems([...dataItems, newFormData]);
    setFormData({
      label: "",
      lname: "",
      mail: "",
    });
  }
  };

  return (
    <>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
        <FormContainer onSubmit={handleFormSubmit}>
          <InputField
            onChange={inputInformations}
            value={formData.label}
            name="label"
            type="text"
            required
            placeholder="enter manager first name"
          />
          <InputField
            onChange={inputInformations}
            value={formData.lname}
            name="lname"
            type="text"
            required
            placeholder="enter manager last name"
          />
          <InputField
            onChange={inputInformations}
            value={formData.mail}
            name="mail"
            type="email"
            required
            placeholder="enter manager email"
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </Drawer>
    </>
  );
};
