import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import About from "./view/About";
import "./App.css";
import ToDo from "./components/ToDo";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<ToDo/>}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
