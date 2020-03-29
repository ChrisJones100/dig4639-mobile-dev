import React, { Component } from "react";
import CardList from "./components/CardList";

///Implement card class
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null
    };
  }

  componentDidMount() {
    let endPoint = "https://api.weather.gov/gridpoints/MLB/25,69/forecast";

    fetch(endPoint)
      .then(response => response.json())
      .then(data => {
        //Once the promise resolves and we have the data we can now set the apps new state.
        this.setState({
          json: data
        });
      });
  }

  render() {
    if (this.state.json) {
      let list = (
        <CardList data={this.state.json.properties.periods}></CardList>
      );
      return list;
    } else {
      //When the json is null don't render the list.
      return <div></div>;
    }
  }
}

export default App;
