import React, { Component } from "react";
import { Button, Form, Segment, Header, Icon } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

export default class NewFeature extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      species: "",
      image: "",
      added: false,
      scientific_name: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    const url = "/featured_causes";

    const data = {
      id: this.state.id,
      species: this.state.species,
      image: this.state.image,
      scientific_name: this.state.scientific_name,
      token: localStorage.getItem("token"),
      user_who_added: localStorage.getItem("Username")
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
      isredirect = <Redirect to={{ pathname: "/featured_causes" }} />;
    }

    return (
      <div>
        <div class="ui stackable center aligned page grid">
          <Segment Large padded>
            <Header>Add a Conservation Cause</Header>
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
                name="species"
                placeholder="species"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                type="text"
                name="scientific_name"
                placeholder="Scientific Name"
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
