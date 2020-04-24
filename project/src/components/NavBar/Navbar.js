import React, { Component } from "react";
import "./Navbar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selector: props.selector,
    };
    this.performAction = this.performAction.bind(this);
    this.props.selector.bind(this);
  }

  performAction() {
    this.state.selector(this.props.actionName);
  }

  render() {
    return (
      <div>
        <div className="hStack" style={{ width: "100%" }}>
          <h1 className="mainHeading">Contacts</h1>
          <button className="actionButton" onClick={this.performAction}>
            {this.props.actionName}
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
