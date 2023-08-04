import logo from "./logo.svg";
import React from "react";
import "./App.css";
import FetchRedux from "./fetchingData";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Navbar, About, Login, Data } from "./NavData";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={FetchRedux}></Route>
            <Route path="/data" Component={Data}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/login" Component={Login}></Route>
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
