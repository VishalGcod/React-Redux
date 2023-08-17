import React, { useState } from "react";
import "./index.css";
import { Select } from "antd";
import { styled } from "styled-components";
import { Button } from "antd";

export const DivList = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
`;
export const Form = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
`;

export const Dropdown2 = () => {
  const [dataItems, setDataItems] = useState([]);
  const [formVis, setFormVis] = useState(false);
  const [formData, setFormData] = useState({
    label: "",
    lname: "",
    mail: "",
  });

  const handleChange = (e, options) => {
    if (options.label === "Add New Manager") {
      setFormVis(true);
    } else {
      setFormVis(false);
      setDataItems([
        ...dataItems,
        { label: options.label, lname: options.lname, mail: options.mail },
      ]);
    }
  };

  const inputInformations = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    setDataItems([...dataItems, newFormData]);
    setFormData({
      label: "",
      lname: "",
      mail: "",
    });
    setFormVis(false);
  };

  const handleDelete = (index) => {
    const updatedDataItems = [...dataItems];
    updatedDataItems.splice(index, 1);
    setDataItems(updatedDataItems);
  };

  return (
    <div>
      <h1>Assign New Manager</h1>
      <Select
        onChange={handleChange}
        showSearch
        style={{ width: 450 }}
        placeholder="Search or Select"
        optionFilterProp="children"
        filterOption={(input, option) => option.label.includes(input)}
        filterSort={(optionA, optionB) =>
          optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Add New Manager",
          },
          {
            value: "2",
            label: "Jackey",
            lname: "chan",
            mail: "chan@123.com",
          },
          {
            value: "3",
            label: "Ezio",
            lname: "Auditore",
            mail: "Auditore@123.com",
          },
          {
            value: "4",
            label: "Micheale",
            lname: "Jackson",
            mail: "Jackson@123.com",
          },
          {
            value: "5",
            label: "David",
            lname: "Billa",
            mail: "Billa@123.com",
          },
        ]}
      />
      {dataItems.map((item, index) => (
        <DivList key={index}>
          <p> {item.label + " "} </p>
          <p> {item.lname} </p>
          <p> {item.mail} </p>
          {item.label === "Add New Manager" && (
            <div key={index}>
              <p> {item.label} </p>
              <p> {item.lname} </p>
              <p> {item.mail} </p>
            </div>
          )}
          <DivList>
            <Button type="Primary" danger onClick={() => handleDelete(index)}>
              Delete
            </Button>
          </DivList>
        </DivList>
      ))}

      {formVis && (
        <Form onSubmit={handleFormSubmit}>
          <input
            onChange={inputInformations}
            value={formData.label}
            name="label"
            type="text"
            required
            placeholder="enter manager first name"
          />
          <input
            onChange={inputInformations}
            value={formData.lname}
            name="lname"
            type="text"
            required
            placeholder="enter manager last name"
          />
          <input
            onChange={inputInformations}
            value={formData.mail}
            name="mail"
            type="email"
            required
            placeholder="enter manager email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </div>
  );
};
