import React, { Component } from "react";
import "./index.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        };
    }

    redner() {
        return <p className="card">{this.state.content}</p>;
    }
}

export default Card;