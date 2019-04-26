import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = { id: "", username: "", current: "not logged in", errorMessage: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const url = "/users/login";

    const data = {
      id: this.state.id,
      username: this.state.username
    };

    console.log("sending", data);

    fetch(url, {
      method: "POST", // or ‘PUT’

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    })
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          this.setState({ errorMessage: "Authentication Failed" });
          return;
        }
      })
      .then(
        user => localStorage.setItem("token", user[0].secret),
        console.log("yssss"),
        this.forceUpdate()
      );
    //   .then(res => res.json())
    //   .then(res => console.log("the current users token is", res))
    //   .then(res => {
    //     this.setState({ current: res.body }, () => {
    //       console.log(this.state, "Current User");
    //     });
    //   })
    //   .catch(error => console.error("Error:", error));
    // console.log("Login State", this.state);
    // this.setState({ logged_in: true });
  };

  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }

  render() {
    console.log("yesssssss please", this.state);
    const errorMessage = this.state.errorMessage;
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div class="login">
            <Segment>
              <Form onSubmit={this.handleSubmit} centered>
                <Form.Input
                  fluid
                  icon="user"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <Button type="submit">Submit</Button> {errorMessage}
              </Form>
            </Segment>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
