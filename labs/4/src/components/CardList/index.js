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
        {this.state.data.map((card, index) => (
          <Card title={card.title} content={card.content} key={index}></Card>
        ))}
      </div>
    );
  }
}

export default CardList;
