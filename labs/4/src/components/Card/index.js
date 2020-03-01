import React, { Component } from "react";
import "./index.css";

//Card class
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      title: props.title,
      key: props.key,
      isClosed: false
    };
  }

  getClassName() {
    return this.state.isClosed ? "close" : "card";
  }

  reload() {
    this.setState({ isClosed: true });
  }

  render() {
    return (
      <div className={this.getClassName()}>
        <h3>{this.state.title}</h3>
        <p>{this.state.content}</p>
        <button onClick={() => this.reload()}>X</button>
      </div>
    );
  }
}

export default Card;
