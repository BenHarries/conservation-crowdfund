import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import SearchExampleStandard from "./searchbar";

export default class NavBar extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu stackable>
        <NavLink activeClassName="active" to="/">
          <Menu.Item
            name="Features"
            active={activeItem === "Features"}
            onClick={this.handleItemClick}
          >
            <img src="https://images.ecosia.org/Kyxly3BaoKw7eG2kWCRMSp75Zb4=/0x390/smart/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F8%2F8d%2FAgriculture%252C_Fisheries_and_Conservation_Department.svg%2F1200px-Agriculture%252C_Fisheries_and_Conservation_Department.svg.png" />
          </Menu.Item>
        </NavLink>
        <Menu.Item
          name="MyCauses"
          active={activeItem === "MyCauses"}
          onClick={this.handleItemClick}
        >
          <NavLink activeClassName="active" to="/MyCauses">
            My Causes
          </NavLink>
        </Menu.Item>

        <Menu.Item position="right">
          <SearchExampleStandard />
        </Menu.Item>
        <Menu.Item>
          <h4>search conservation causes</h4>
        </Menu.Item>

        <Menu.Item position="right">
          {this.state.users.map(user => (
            <p key={user.id}>{user.username}'s Account</p>
          ))}
          ;
        </Menu.Item>
      </Menu>
    );
  }
}
