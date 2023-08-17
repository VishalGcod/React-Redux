import React, { useState } from "react";
import { LandingPage } from "./huddleLandingPage";
import { Dropdown } from "./antDesignDropdown";
import { Comp1, Comp2 } from "./ProtectedRoutePrac";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FormDrawer } from "./formDrawer";
import { ProtectedRoute } from "./ProtectedRoutePrac";
import { DrawerView } from "./newDrawerPrac";

function App() {
  const[btnLog,setBtnLog]=useState(false)
  return (
    <div className="App">
      <Router>
       <div>
          <Link to='/'>Home</Link>
          <Link to='/comp1'>About</Link>
          <Link to='/comp2'>Login</Link>
        </div>
        <Routes>
        <Route path="/" element={<LandingPage setBtnLog={setBtnLog} btnLog={btnLog}/> }></Route>
        <Route element={<ProtectedRoute btnLog={btnLog}/>}>
        <Route path="/comp1" Component={DrawerView}></Route>
        <Route path="/comp2" Component={Comp1}></Route>
        </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
