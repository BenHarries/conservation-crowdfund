import React, { Component } from "react";
import Feature from "./feature";
import { Card, Segment, Form } from "semantic-ui-react";
import "./features.css";

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
    console.log("STATE OF FEATUERS", this.state);

    var cause_name_search = this.state.cause_name;
    if (cause_name_search) {
      cause_name_search = cause_name_search.toLowerCase();
    }

    var filtered_featured = this.state.featured_causes.filter(
      featured_cause => {
        return (
          featured_cause.species.toLowerCase().search(cause_name_search) != -1
        );
      }
    );

    let filtered_features_cards = filtered_featured.map(featured_cause => {
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

    console.log(
      "STATE OF FEATUERS filtered_featured:",
      filtered_features_cards
    );
    return (
      <div>
        <div class="search">
          <Segment textAlign="center" color="blue">
            <Form centered small>
              <Form.Input
                fluid
                icon="heart"
                type="text"
                name="cause_name"
                placeholder="Search causes"
                onChange={this.handleChange}
              />
            </Form>{" "}
          </Segment>
        </div>
        <div class="features">
          <br />

          <Card.Group itemsPerRow={4} centered stackable>
            {filtered_features_cards}
            {/* {features} */}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default Features;
