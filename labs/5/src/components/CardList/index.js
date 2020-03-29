import React, { Component } from "react";
import Card from "../Card/index.js";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((period, index) => (
          <Card
            key={index}
            name={period.name}
            temperature={period.temperature}
            temperatureUnit={period.temperatureUnit}
            detailedForecast={period.detailedForecast}
          ></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
