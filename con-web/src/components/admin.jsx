import React, { Component } from "react";
import { Card, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";
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

    fetch("http://localhost:3001" + url)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("There is no user with this name");
        }
      })
      .then(user => this.setState({ user: user }));
<<<<<<< HEAD

    console.log(this.state);
=======
>>>>>>> d29e2f1675e53339665f40e924f16ba13bd6716f
  };

  handleFeatureSubmit = event => {
    event.preventDefault();

    const url = "/featured_causes/desired/" + this.state.feature;

    fetch("http://localhost:3001" + url)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("There is no user with this feature");
        }
      })
      .then(desired_feature => this.setState({ desired_feature }));
<<<<<<< HEAD

    console.log("STATE OF STATE", this.state);
=======
>>>>>>> d29e2f1675e53339665f40e924f16ba13bd6716f
  };
  componentDidMount() {
    fetch("http://localhost:3001/featured_causes")
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
      return <Card centered image={cause.image} description={user_info} />;
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
                      <NewUser />
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <NewFeature />
                    </Grid.Column>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </Grid.Row>

                  <Grid.Row verticalAlign="middle">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <div class="ui stackable center aligned page grid">
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
                        </Segment>{" "}
                      </div>
                    </Grid.Column>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                      <div class="ui stackable center aligned page grid">
                        <Segment>
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
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row verticalAlign="middle">
                    {desired_user} {desired_cause}
                  </Grid.Row>
                </Grid>
                <div class="ui stackable center aligned page grid">
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
