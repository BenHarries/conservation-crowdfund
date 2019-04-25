import React, { Component } from "react";
import { Grid, Image, Card, Form, Button } from "semantic-ui-react";
// const GridExampleCelledInternally = () => (
import "./landing.css";
import Feature from "./feature";

class MyCauses extends Component {
  state = { users: [], featured_causes: [], user: [] };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const url = "/users/" + this.state.id;
    console.log("sending", url);

    fetch(url)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("There is no user with this name");
        }
      })
      .then(user => this.setState({ user: user }));

    console.log(this.state);

    // fetch(url, {
    //   method: "POST", // or ‘PUT’

    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers: { "Content-Type": "application/json" }
    // })
    //   .then(res => res.text())
    //   .then(res => console.log("Success:", res))

    //   .catch(error => console.error("Error:", error));
  };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch("/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));
  }

  render() {
    var users_info = this.state.users;
    let result = users_info.map(a => a.causes);
    var all_causes = this.state.featured_causes;
    var user_causes = all_causes.filter(featured_cause => {
      return featured_cause.species == result;
    });
    console.log("gggg", all_causes);
    console.log("STATE", this.state);

    let features = user_causes.map(featured_cause => {
      return (
        <Feature
          key={featured_cause.id}
          title={featured_cause.species}
          image={featured_cause.image}
        />
      );
    });
    console.log("yyyy", features);

    return (
      <div class="grid">
        <Grid celled="internally">
          <Grid.Row>
            Causes You have donated to
            <Card.Group itemsPerRow={4}>{features}</Card.Group>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MyCauses;
