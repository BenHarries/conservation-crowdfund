import React, { Component } from "react";
import { Card, Form, Button, Grid, Divider } from "semantic-ui-react";
// const GridExampleCelledInternally = () => (
import "./admin.css";
import NewFeature from "./test_send";
import List from "./list";
class Admin extends Component {
  state = { users: [], user: [] };
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
    fetch("/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));
  }

  render() {
    let desired_user = this.state.user.map(user => {
      return (
        <Card
          centered
          image={user.profile_pic}
          header={user.username}
          meta="Friend"
          description={user.causes}
          extra="and"
        />
      );
    });

    return (
      <div class="user_find">
        <Grid columns={4} divided relaxed="very" centered>
          <Grid.Row verticalAlign="middle">
            <Grid.Column textAlign="center" verticalAlign="middle">
              <Grid.Row verticalAlign="middle">
                GET request a certain user (e.g Ben Harries){" "}
                <Form onSubmit={this.handleSubmit} centered>
                  <Form.Input
                    fluid
                    icon="search"
                    width={30}
                    type="text"
                    name="id"
                    placeholder="Name of User"
                    onChange={this.handleChange}
                  />
                  <Button type="submit">Submit</Button>{" "}
                </Form>
              </Grid.Row>
              <Divider />
              <Grid.Row verticalAlign="middle">
                {" "}
                Your User will Appear here
                {desired_user}{" "}
              </Grid.Row>
            </Grid.Column>

            <Grid.Column textAlign="center" verticalAlign="middle">
              <NewFeature />
            </Grid.Column>
            <Grid.Column>
              {" "}
              <List />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Admin;
