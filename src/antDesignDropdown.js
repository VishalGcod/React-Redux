import React from "react";
import "./index.css";
import { Select } from "antd";
import { useState } from "react";

export const Dropdown = () => {
        const [selectedValue, setSelectedValue] = useState('');
        const [selectedLabel, setSelectedLabel] = useState('');
        const[formVis,setFormVis]=useState(true)
        const handleChange = (e, options) => {
          setSelectedValue(e);
          console.log(options.label);
          setSelectedLabel(options.label);
          console.log(selectedLabel);
        };
  return (
    <div>
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
            label: "Manager1",
          },
          {
            value: "3",
            label: "Manager2",
          },
          {
            value: "4",
            label: "Manager3",
          },
          {
            value: "5",
            label: "Manager4",
          },
          {
            value: "6",
            label: "Manager5",
          },
          {
            value: "7",
            label: "Manager6",
          },
        ]}
      />
      {selectedValue && <div><span>Selected Value: {selectedValue}</span> <span></span> <span>Selected Name: {selectedLabel}</span></div>}
    </div>
  );
};
