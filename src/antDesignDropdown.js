import React from "react";
import "./index.css";
import { Select } from "antd";
import { useState } from "react";

export const Dropdown = () => {
  const [lables, setLables] = useState([]);
  const [objLables,setObjLables]=useState({
    fname:"",
    lname:"SecondName",
    mail:"sampleMail@gmail.com",
  })
  const [formVis, setFormVis] = useState(false);
  const [formData,setFormData]=useState({
    fname:"",
    lname:"",
    mail:"",
  })
  const handleChange = (e, options) => {
    setLables([...lables,options.label]);
    setObjLables({fname:options.label})
    if (options.label == "Add New Manager") {
      setFormVis(!formVis);
    //   setLables([...lables, ''])
    }
  };

  const inputInformations=(e)=>{
    const {name,value}=e.target;
    console.log(objLables);
    // setFormData({...formData,[name]:value,})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // console.log(formData);
    // console.log(lables);
    // setLables([...lables,formData])
    setFormVis(false);
  };

  const clickToDelete = (index) => {
    const updatedDataItems = [...lables];
    updatedDataItems.splice(index, 1);
    setLables(updatedDataItems);
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
        ]}
      />
      {lables.map((e, index) => (
        <div>
          <h1>{e}</h1>
          <button onClick={()=>clickToDelete(index)}>Del</button>
        </div>
      ))}

      {formVis && (
        <form onSubmit={handleFormSubmit}>
          <input onChange={inputInformations} value={formData.fname} name="fname" type="text" placeholder="enter manager first name"></input>
          <input onChange={inputInformations} value={formData.lname} name="lname" type="text" placeholder="enter manager last name"></input>
          <input onChange={inputInformations} value={formData.mail} name="mail" type="email" placeholder="enter manager email"></input>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
