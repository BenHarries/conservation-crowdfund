import React, { Component } from "react";
import {
  Card,
  Form,
  Grid,
  Divider,
  Header,
  Icon,
  Segment,
  Message
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";

import "./admin.css";
import NewFeature from "./test_send";
import NewUser from "./newuser";
import List from "./list";
class Admin extends Component {
  state = { users: [], user: [], desired_feature: [] };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleUserSubmit = event => {
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

  handleFeatureSubmit = event => {
    event.preventDefault();

    const url = "/featured_causes/desired/" + this.state.feature;
    console.log("sending", url);

    fetch(url)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("There is no user with this feature");
        }
      })
      .then(desired_feature => this.setState({ desired_feature }));

    console.log("STATE OF STATE", this.state);

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

  isAuthenticated(tok) {
    const token = tok;
    return token && token === "sjkdfnkjasbssdn";
  }

  isAtleastAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }
  render() {
    const isAlreadyAuthenticated = this.isAuthenticated(
      localStorage.getItem("token")
    );

    const isalreadyAtleastAuthenticated = this.isAtleastAuthenticated();

    let desired_user = this.state.user.map(user => {
      var role = "User (non-admin)";
      if (this.isAuthenticated(user.secret)) {
        role = "Admin";
      }

      var user_info = (
        <div class="ui one column stackable center aligned page grid">
          <br />

          <Header>{user.username}!</Header>
          <br />
          <br />
          <Header>User Id: {user.id}</Header>
          <Header>User Causes: {user.causes}</Header>
          <Header>{user.username}</Header>
          <span>
            <p>As Json: {JSON.stringify(user)}</p>
          </span>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
      return (
        <Card
          centered
          meta={<Header>{role}</Header>}
          image={user.profile_pic}
          description={user_info}
          extra={role}
        />
      );
    });
    let desired_cause = this.state.desired_feature.map(cause => {
      var user_info = (
        <div class="ui one column stackable center aligned page grid">
          <br />

          <Header>{cause.species}!</Header>
          <br />
          <br />
          <Header>User Id: {cause.id}</Header>
          <Header>Added By: {cause.user_who_added}</Header>
          <span>
            <p>As Json: {JSON.stringify(cause)}</p>
          </span>

          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
      return (
        <Card
          centered
          // meta={<Header>{cause}</Header>}
          image={cause.image}
          description={user_info}
        />
      );
    });

    return (
      <div>
        {" "}
        {!isalreadyAtleastAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div>
            {!isAlreadyAuthenticated ? (
              <div class="ui stackable center aligned page grid">
                <Header as="h1" icon Centered>
                  <Icon name="window close" color="red" />
                  Unfortunately You are not an Admin and Cannot Access this Page
                </Header>
              </div>
            ) : (
              <div class="user_find">
                <br />
                <br />
                <br />
                <div class="ui stackable center aligned page grid">
                  <Header as="h2" icon Centered>
                    <Icon name="user circle" />
                    Admin Facilities{" "}
                    <Header.Subheader>
                      Add causes, Search for and see all Users{" "}
                    </Header.Subheader>
                  </Header>{" "}
                </div>
                <Grid columns={2} divided relaxed="very" centered stackable>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <Segment.Group horizontal padded>
                        <Segment>
                          <NewFeature />
                        </Segment>
                        <Segment>
                          <NewUser />
                        </Segment>
                      </Segment.Group>
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <Grid.Row verticalAlign="middle">
                        <div class="ui stackable center aligned page grid">
                          <br />
                          <br />
                          <br />
                          <br />
                          <Segment>
                            Search a User for their info e.g David{" "}
                            <Form onSubmit={this.handleUserSubmit} centered>
                              <Form.Input
                                fluid
                                icon="search"
                                width={30}
                                type="text"
                                name="id"
                                placeholder="Name of User"
                                onChange={this.handleChange}
                              />
                            </Form>
                            Search a Cause for their info e.g Turtle{" "}
                            <Form onSubmit={this.handleFeatureSubmit} centered>
                              <Form.Input
                                fluid
                                icon="search"
                                width={30}
                                type="text"
                                name="feature"
                                placeholder="Name of Cause"
                                onChange={this.handleChange}
                              />
                            </Form>
                          </Segment>
                        </div>
                      </Grid.Row>
                      <br />
                      <br />

                      <Grid.Row verticalAlign="middle">
                        {" "}
                        {desired_user} {desired_cause}
                      </Grid.Row>
                    </Grid.Column>

                    <Grid.Column> </Grid.Column>
                  </Grid.Row>
                </Grid>
                <div class="ui stackable center aligned page grid">
                  <br />
                  <br />
                  <br />

                  <List />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
