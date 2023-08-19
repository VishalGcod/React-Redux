import React, { useState } from "react";
import { LandingPage } from "./huddleLandingPage";
import { Dropdown } from "./antDesignDropdown";
import { Comp1, Comp2 } from "./ProtectedRoutePrac";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FormDrawer } from "./formDrawer";
import { ProtectedRoute } from "./ProtectedRoutePrac";
import { DrawerView } from "./newDrawerPrac";

function App() {
  const[btnLog,setBtnLog]=useState(true)
  return (
    <div className="App">
      <Router>
       <div>
          <Link to='/'>Home</Link>
          <Link to='/drawer'>About</Link>
          <Link to='/login'>Login</Link>
        </div>
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
