import React from "react";
import { LandingPage } from "./huddleLandingPage";
import { Dropdown } from "./antDesignDropdown";
import { Comp1, Comp2 } from "./ProtectedRoutePrac";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoutePrac";
import { Dropdown2 } from "./newTryComp";

function App() {
  return (
    <div className="App">
      <Router>
       <div>
          <Link to='/'>Home</Link>
          <Link to='/comp1'>About</Link>
          <Link to='/comp2'>Login</Link>
        </div>
        <Routes>
        <Route path="/" Component={LandingPage}></Route>
        <Route path="/comp1" Component={Dropdown2}></Route>
        <Route path="/comp2" Component={Comp1}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
