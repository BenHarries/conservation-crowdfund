import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import Features from "./features";
import "./newnav.css";

const API =
  "http://apiv3.iucnredlist.org/api/v3/species/loxodonta%20africana?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";
// const API = "https://randomuser.me/api/?results=500";

export default class NavBar extends Component {
  state = { users: [], isLoading: false, error: null, pictures: [] };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/users")
      .then(results => {
        if (results.ok) {
          return results.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(users => this.setState({ users, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
    fetch("http://localhost:3001" + API)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => {
        let pictures = data.result.map(pic => {
          return (
            <div key={pic.results}>
              <p>{pic.category}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
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
