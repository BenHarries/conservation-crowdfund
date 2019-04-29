import React, { Component } from "react";
import { Button, Form, Segment, Header, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export default class NewUser extends Component {
  constructor() {
    super();
    this.state = { id: "", username: "", causes: [], profile_pic: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const url = "/users/new_user";

    const data = {
      id: this.state.id,
      username: this.state.username,
      profile_pic: this.state.profile_pic,
      causes: this.state.causes
    };
    console.log("sending", data);

    fetch(url, {
      method: "POST", // or ‘PUT’

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.text())
      .then(res => console.log("Success:", res))

      .catch(error => console.error("Error:", error));

    this.setState({ added: true });
  };

  render() {
    var submitted = this.state.added;
    var isredirect;
    if (submitted) {
      isredirect = <Redirect to={{ pathname: "/admin" }} />;
    }

    return (
      <div>
        <div class="ui stackable center aligned page grid">
          <Segment Large padded>
            <Header>Add a New User</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                type="text"
                name="id"
                placeholder="id"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                type="text"
                name="profile_pic"
                placeholder="Profile Image URL"
                onChange={this.handleChange}
              />
              <Button type="submit" color="blue">
                <Icon name="add" />
              </Button>{" "}
              {isredirect}
            </Form>
          </Segment>
        </div>
      </div>
    );
  }
}
