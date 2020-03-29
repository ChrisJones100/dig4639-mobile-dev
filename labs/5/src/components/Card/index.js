import React, { Component } from "react";
import "./index.css";

//Card class
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      temperature: props.temperature,
      temperatureUnit: props.temperatureUnit,
      detailedForecast: props.detailedForecast
    };
  }

  calculateBackground() {
    if (this.state.temperature < 70) {
      return "aqua";
    } else if (this.state.temperature < 80) {
      return "green";
    } else if (this.state.temperature < 90) {
      return "orange";
    } else {
      return "red";
    }
  }

  render() {
    return (
      <div className="card">
        <h3>{this.state.name}</h3>
        <h1 style={{ color: this.calculateBackground() }}>
          {this.state.temperature + " " + this.state.temperatureUnit}
        </h1>
        <p>{this.state.detailedForecast}</p>
      </div>
    );
  }
}

export default Card;
