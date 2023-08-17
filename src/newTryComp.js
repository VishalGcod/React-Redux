import React, { useState } from "react";
import "./index.css";
import { Select } from "antd";

export const Dropdown2 = () => {
  const [dataItems, setDataItems] = useState([]);
  const [formVis, setFormVis] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
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
      fname: "",
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
      <h1>Assign Manager New Try</h1>
      <Select
        onChange={handleChange}
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
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
        <div key={index}>
          <p>First Name: {item.label}</p>
          <p>Last Name: {item.lname}</p>
          <p>Email: {item.mail}</p>
          {item.label === "Add New Manager" && (
            <div>
              <p>First Name: {item.fname}</p>
              <p>Last Name: {item.lname}</p>
              <p>Email: {item.mail}</p>
            </div>
          )}
          <button onClick={() => handleDelete(index)}>Del</button>
        </div>
      ))}

      {formVis && (
        <form onSubmit={handleFormSubmit}>
          <input
            onChange={inputInformations}
            value={formData.fname}
            name="fname"
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
        </form>
      )}
    </div>
  );
};
