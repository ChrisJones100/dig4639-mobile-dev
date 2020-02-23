import React, { Component } from "./node_modules/react";
import "./index.css";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        };
    }

    render() {
        return <p> className="card">{this.state.content}</p>;
    }
}

export default Card;