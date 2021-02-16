import "./App.css";
import React, { Component } from "react";
import Play from "./components/Play"
import NavMenu from "./components/NavMenu"

class App extends Component {

  render() {
    return (
      <div>
        <NavMenu />
        <Play />
      </div>
    );
  }
}

export default App;
