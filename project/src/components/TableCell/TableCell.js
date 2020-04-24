import React, { Component } from "react";
import "./TableCell.css";

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.index,
      name: props.name,
      index: props.index,
      number: props.number,
      profileURL: props.profileURL,
      selectionHandler: props.selectionHandler,
    };

    this.select = this.select.bind(this);
    this.props.selectionHandler.bind(this);
  }

  select() {
    this.state.selectionHandler(this.state.index);
  }

  render() {
    return (
      <div
        className="tablecell"
        onClick={this.select}
        style={
          this.state.isSelected
            ? { backgroundColor: "#ededed" }
            : { backgroundColor: "#fafafa" }
        }
      >
        <img src="" atl="profile picture" className="profilePic"></img>
        <div>
          <div style={{ display: "flex" }}>
            <div className="firstName">{this.state.name}</div>
          </div>
          <div className="phoneNumber">{this.state.number}</div>
        </div>
      </div>
    );
  }
}

export default TableCell;
