import React, { Component } from "react";
import Settings from "./Components/Settings";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://static1.squarespace.com/static/55acc005e4b098e615cd80e2/5777d3433e00be9cc0d8e3f6/5777d384d482e9910faaf472/1467473313295/13.jpg?format=2500w"
    };
  }
  render() {
    return (
      <div className="App">
        <div
          className="ImageBG"
          style={{ backgroundImage: "url(" + this.state.image + ")" }}
        />
        <Settings image={this.state.image} />
      </div>
    );
  }
}

export default App;
