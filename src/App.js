import React, { useState } from "react";
import { LandingPage } from "./huddleLandingPage";
import { Dropdown } from "./antDesignDropdown";
import { Comp1, Comp2 } from "./ProtectedRoutePrac";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FormDrawer } from "./formDrawer";
import { ProtectedRoute } from "./ProtectedRoutePrac";
import { DrawerView } from "./newDrawerPrac";
import { styled } from "styled-components";

export const Header=styled.div`display:flex; justify-content:space-around; height:7dvh; background-color:pink; align-items:center; font-size:20px; font-weight:700; `; 
function App() {
  const[btnLog,setBtnLog]=useState(true)
  return (
    <div className="App">
      <Router>
       <Header>
          <Link to='/'>Home</Link>
          <Link to='/drawer'>About</Link>
          <Link to='/login'>Login</Link>
        </Header>
        <Routes>
        <Route path="/" element={<LandingPage/> }></Route>
        <Route path="/login" element={<Comp2 setBtnLog={setBtnLog} btnLog={btnLog}/> }></Route>
        <Route element={<ProtectedRoute btnLog={btnLog}/>}>
        <Route path="/drawer" Component={DrawerView}></Route>
        </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
