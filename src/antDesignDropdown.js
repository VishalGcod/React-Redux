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
  const [formArr,setFormArr]=useState([])
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
    setFormData({...formData,[name]:value,})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormArr([...formArr,formData])
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

  const clickToDeleteArr = (index) => {
    const updateFormData = [...formArr];
    updateFormData.splice(index, 1);
    formArr(updateFormData);
  };

  return (
    <div>
        <h1>Assign Manager</h1>
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
          },
          {
            value: "3",
            label: "Ezio",
          },
          {
            value: "4",
            label: "Micheale",
          },
          {
            value: "5",
            label: "David",
          },
        ]}
      />
      {lables.map((e, index) => (
        <div key={index}>
          <span>{e}</span><span></span>
          <span>Jackson</span><span></span>
          <span>Jackeychan.123@gmail.com</span><span></span>
          <button onClick={()=>clickToDelete(index)}>Del</button>
        </div>
      ))}

      {formArr.map((e,index)=>(
        <div key={index}>
            <span>{e.fname}</span><span></span>
            <span>{e.lname}</span><span></span>
            <span>{e.mail}</span><span></span>
            <button onClick={()=>clickToDeleteArr(index)}>Del</button>
        </div>
      ))}

      {formVis && (
        <form onSubmit={handleFormSubmit}>
          <input id="input-name" onChange={inputInformations} value={formData.fname} name="fname" type="text" placeholder="enter manager first name"></input>
          <input onChange={inputInformations} value={formData.lname} name="lname" type="text" placeholder="enter manager last name"></input>
          <input onChange={inputInformations} value={formData.mail} name="mail" type="email" placeholder="enter manager email"></input>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};
