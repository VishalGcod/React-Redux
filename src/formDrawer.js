import React, { useState } from 'react';
import './index.css';
import { Button, Drawer } from 'antd';

export const FormDrawer= () => {
  const [open, setOpen] = useState(true);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
      {formVis && (
        <form onSubmit={handleFormSubmit}>
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
        </form>
      )}
      </Drawer>
    </>
  );
};

export default App;