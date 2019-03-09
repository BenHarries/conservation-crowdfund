import React, { Component } from "react";
import Feature from "./feature";
import { Card, Header } from "semantic-ui-react";
import "./features.css";

class Features extends Component {
  state = {
    featured_causes: []
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
        />
      );
    });
    return (
      <div>
        <div class="features">
          <div class="featuresHeading">
            <Header as="h1" textAlign="center">
              Featured
            </Header>
            <Header as="h2" textAlign="left">
              Explore <a>{this.state.featured_causes.length} </a>
              causes
            </Header>
          </div>
          <Card.Group itemsPerRow={4}>{features}</Card.Group>
        </div>
      </div>
    );
  }
}

export default Features;
