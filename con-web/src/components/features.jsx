import React, { Component } from "react";
import Feature from "./feature";
import { Card, Header } from "semantic-ui-react";
import "./features.css";

const API =
  "http://apiv3.iucnredlist.org/api/v3/species/loxodonta%20africana?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

class Features extends Component {
  state = {
    featured_causes: []
  };

  componentDidMount() {
    fetch("/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));
    // Now I have to work out how the cause once clicked on will be moved
    // the projects page loading data from the correct element in the array
    // featured causes as its:
    // funding level
    // endangered category
    // its intro
    // its rewards
    // its youtube video            WILL THIS BE A GET REQUEST
    fetch(API)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => {
        let category = data.result.map(pic => {
          return (
            <p class="catagory-text">
              <strong>{pic.category}</strong>
            </p>
          );
        });
        this.setState({ category: category });
      });
  }
  render() {
    let features = this.state.featured_causes.map(featured_cause => {
      return (
        <Feature
          key={featured_cause.id}
          title={featured_cause.species}
          image={featured_cause.image}
          category={this.state.category}
        />
      );
    });

    return (
      <div>
        <div class="features">
          <br />
          <Card.Group itemsPerRow={4} centered stackable>
            {features}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Features;
