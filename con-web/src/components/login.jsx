import React, { Component } from "react";
import { Form, Button, Segment } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {
    id: "",
    username: "",
    password: "",
    current: "not logged in",
    errorMessage: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const { history } = this.props;

    event.preventDefault();

    const url = "/users/login";

    const data = {
      id: this.state.id,
      username: this.state.username,
      password: this.state.password
    };

    console.log("sending", data);

    fetch(url, {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    })
      .then(result => result.json())

      .catch(error => {
        if (!error.error) {
          return new Promise(function(resolve) {
            setTimeout(resolve, 1000);
          }, this.setState({ now: true }));
        }
        this.setState({ errorMessage: error });
        return;
      })

      .then(res => {
        this.setState({ current: res });
        if (!res.error) {
          localStorage.setItem("token", res[0].secret);
          console.log("yes i have the token");
          localStorage.setItem("Username", this.state.current[0].username);
          localStorage.setItem(
            "ProfileImageUrl",
            this.state.current[0].profile_pic
          );
          localStorage.setItem("user_id", this.state.current[0].id);
          localStorage.setItem("user_causes", this.state.current[0].causes);
          this.setState();

          var myNamespace = window.myNamespace || {};
          myNamespace.Username = this.state.current[0].username;
          myNamespace.Causes = this.state.current[0].causes;
        }
      })
      .then(res => {
        return new Promise(
          function(resolve) {
            setTimeout(resolve, 1000);
          },
          this.setState({ now: true }),

          window.location.reload()
        );
      })
      // .then(history.push("/featured_causes"));
      // .then(this.setState())
      .then(this.setState({ now: true }))

      .then(console.log("Alpha"));
  };

  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }

  render() {
    console.log("Rendered Again", this.state);
    var isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        <div>
          {isAlreadyAuthenticated ? (
            <Redirect to={{ pathname: "/featured_causes" }} />
          ) : (
            <div>
              <div class="info">
                <Segment color="blue">
                  {" "}
                  User: Username = david
                  <br />
                  <br /> Admin: Username = admin
                </Segment>
              </div>
              <br />
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
                    <Form.Input
                      fluid
                      icon="user"
                      type="text"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                    <Button type="submit">Submit</Button>{" "}
                    {this.state.current.message}
                  </Form>
                </Segment>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
