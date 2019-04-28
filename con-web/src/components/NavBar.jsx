import React, { Component } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/users")
      .then(results => {
        if (results.ok) {
          return results.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(users => this.setState({ users }))
      .catch(error => this.setState({ error }));
  }

  render() {
    const { activeItem } = this.state;
    const { users } = this.state;

    return (
      <Menu>
        <NavLink to="/featured_causes">
          <Menu.Item
            name="editorials"
            active={activeItem === "editorials"}
            onClick={this.handleItemClick}
          >
            Editorials
          </Menu.Item>
        </NavLink>
        <NavLink to="/">
          <Menu.Item
            name="reviews"
            active={activeItem === "reviews"}
            onClick={this.handleItemClick}
          >
            Reviews
          </Menu.Item>
        </NavLink>
        <NavLink to="/">
          <Menu.Item
            name="upcomingEvents"
            active={activeItem === "upcomingEvents"}
            onClick={this.handleItemClick}
          >
            {/* {users.map(user => (
              <p key={user.id}>{user.username}'s Account</p>
            ))}{" "} */}
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}
