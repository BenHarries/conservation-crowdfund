import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class NewFeature extends Component {
  constructor() {
    super();
    this.state = { id: "", species: "", image: "" };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    // console.log("id : " + this.state.id);
    // console.log("species : " + this.state.species);
    // console.log("image : " + this.state.image);

    const url = "/featured_causes";

    const data = {
      id: this.state.id,
      species: this.state.species,
      image: this.state.image
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
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            width={6}
            type="text"
            name="id"
            placeholder="id"
            onChange={this.handleChange}
          />
          <Form.Input
            width={6}
            type="text"
            name="species"
            placeholder="species"
            onChange={this.handleChange}
          />
          <Form.Input
            width={6}
            type="text"
            name="image"
            placeholder="image"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>{" "}
        </Form>
      </div>
    );
  }
}
