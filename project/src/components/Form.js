import React, { Component } from "react";
import { fetchContacts, removeContact, addContact } from "../API+Methods";
import "./Form.css";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      number: "",
      handle: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const text = event.target.value;
    switch (event.target.name) {
      case "name":
        this.setState({ name: text });
        break;
      case "number":
        this.setState({ number: text });
        break;
      default:
        break;
    }
  }

  async handleSubmit(event) {
    await addContact(this.state.name, this.state.number);
    window.location.reload();
  }

  render() {
    return (
      <form className="dataForm">
        <label> Name:</label>
        <input type="text" name="name" onChange={this.handleChange} />
        <label>
          Number:
          <input type="text" name="number" onChange={this.handleChange} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default NameForm;
