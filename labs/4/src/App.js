import React, { Component } from "react";
import Card from "./components/Card/index.js";
import CardList from "./components/CardList";
import CardListData from "./data.json";

///Implement card class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let list = <CardList data={CardListData.cards}></CardList>;
    return list;
  }
}

export default App;
