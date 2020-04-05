import React, { Component } from "react";

class ScoreCard extends Component {
  //Initialize
  constructor(props) {
    super(props);
    this.state = {
      score: props.score * 100,
    };
  }
  calculateColor() {
    const score = this.state.score;
    if (score < 70) {
      return "red";
    } else if (score < 90) {
      return "orange";
    } else {
      return "green";
    }
  }
  render() {
    return (
      <div className="card" style={{ padding: "2em" }}>
        <h2 style={{ textAlign: "center" }}>Your Grade:</h2>
        <h1 style={{ color: this.calculateColor(), textAlign: "center" }}>
          {Math.round(this.state.score) + "%"}
        </h1>
      </div>
    );
  }
}

export default ScoreCard;
