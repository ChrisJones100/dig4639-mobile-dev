import React, { Component } from "react";
import "./index.css";

//Card class
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content
        };
    }

    render() {
        return <p className="card">{this.state.content}</p>;
    }
}

export default Card;