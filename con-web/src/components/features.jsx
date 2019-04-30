import React, { Component } from "react";
import Feature from "./feature";
import { Card, Header, Form } from "semantic-ui-react";
import "./features.css";

import SearchBar from "./searchbar";

class Features extends Component {
  state = {
    featured_causes: []
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    fetch("/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));
  }
  render() {
    let features = this.state.featured_causes.map(featured_cause => {
      return (
        <Feature
          key={featured_cause.id}
          title={featured_cause.species}
          image={featured_cause.image}
          scientific_name={featured_cause.scientific_name}
          // category={this.state.category}
          user_who_added={featured_cause.user_who_added}
        />
      );
    });

    return (
      <div>
        <div class="features">
          <br />
          <Card.Group itemsPerRow={4} centered stackable>
            <Form centered>
              <Form.Input
                fluid
                icon="user"
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
              />
            </Form>
            {features}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Features;
