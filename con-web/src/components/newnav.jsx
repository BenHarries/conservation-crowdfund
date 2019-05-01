import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import Features from "./features";
import "./newnav.css";

export default class NavBar extends Component {
  state = { users: [], isLoading: false, error: null, pictures: [] };

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
      .then(users => this.setState({ users, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  handleContextRef = contextRef => this.setState({ contextRef });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }
  render() {
    var isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {!isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div>
            <div class="ui one column stackable center aligned page grid">
              <div class="column six wide">
                <Header as="h1" textAlign="center">
                  Featured Causes
                </Header>{" "}
              </div>
            </div>
            <div class="restrict">
              <Features />
            </div>
          </div>
        )}
      </div>
    );
  }
}
