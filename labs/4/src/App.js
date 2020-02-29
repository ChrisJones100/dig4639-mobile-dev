import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card/index.js";

///Implement card class
class App extends Component {
  render() {
    return <Card content="This is a card!"></Card> 
  };
}

export default App;