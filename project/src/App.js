import React, { Component } from "react";
import TableCell from "./components/TableCell/TableCell";
import NameForm from "./components/Form";
import {
  fetchContacts,
  removeContact,
  addContact,
  getProfile,
} from "./API+Methods";
import ContactList from "./components/ContactList";
import Navbar from "./components/NavBar/Navbar";
import HeaderCell from "./components/HeaderCell/HeaderCell";

//Using constants since enums aren't natively supported in javascript
//Used to keep track of the Apps state
const State = {
  showList: 1,
  addContact: 2,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actionState: State.showList,
      contacts: [],
      selectedIndex: null,
      profileName: null,
      contactCount: null,
    };

    this.performAction = this.performAction.bind(this);
    this.didSelect = this.didSelect.bind(this);
  }

  async componentDidMount() {
    const contacts = await fetchContacts();
    const profile = await getProfile();
    this.setState({
      contacts: contacts,
      actionState: State.showList,
      delete: false,
      profileName: profile["name"],
      contactCount: profile["count"],
    });
  }

  async performAction(event) {
    if (event === "Add") {
      this.setState({
        actionState: State.addContact,
      });
    } else if (event == "Delete") {
      await removeContact(this.state.selectedIndex);
      window.location.reload();
    }
  }

  didSelect(index) {
    //Deselect the clicked cell if it is currently selected.
    const newIndex = index === this.state.selectedIndex ? null : index;
    this.setState({
      selectedIndex: newIndex,
    });
  }

  render() {
    switch (this.state.actionState) {
      case State.showList:
        const actionName = this.state.selectedIndex === null ? "Add" : "Delete";
        return (
          <div>
            <Navbar
              actionName={actionName}
              selector={this.performAction}
            ></Navbar>
            <HeaderCell
              name={this.state.profileName}
              count={this.state.contacts.length}
            ></HeaderCell>
            <ContactList
              contacts={this.state.contacts}
              selectionHandler={this.didSelect}
            ></ContactList>
          </div>
        );
      case State.addContact:
        return (
          <div>
            <HeaderCell
              name={this.state.profileName}
              count={this.state.contacts.length}
            ></HeaderCell>
            ;<NameForm>ADD</NameForm>;
          </div>
        );
    }
  }
}

export default App;
