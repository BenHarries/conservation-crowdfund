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
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    })
      .then(result => result.json())
      .then(
        res => this.setState({ current: res }),
        console.log("yesssssss please", this.state),

        // user => localStorage.setItem("token", user[0].secret),
        // console.log("yssss"),
        this.forceUpdate()
      )
      .catch(error => this.setState({ errorMessage: error }));

    if (this.state.current !== "not logged in") {
      console.log("yes i have the token");
      localStorage.setItem("token", this.state.current[0].secret);
      localStorage.setItem("Username", this.state.current[0].username);
      localStorage.setItem(
        "ProfileImageUrl",
        this.state.current[0].profile_pic
      );
      localStorage.setItem("user_id", this.state.current[0].id);
      localStorage.setItem("user_causes", this.state.current[0].causes);

      var myNamespace = window.myNamespace || {};
      myNamespace.Username = this.state.current[0].username;
      myNamespace.Causes = this.state.current[0].causes;
    }
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
    // if (isAlreadyAuthenticated) {
    //   window.location.reload();
    // }
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
