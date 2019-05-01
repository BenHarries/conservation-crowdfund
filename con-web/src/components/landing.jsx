import React, { Component } from "react";
import { Grid, Image, Card, Header } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import "./landing.css";
import Feature from "./feature";

const fetch_current_user = "users/" + localStorage.Username;

class MyCauses extends Component {
  state = { users: [], featured_causes: [], user: [], current_user_causes: [] };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const url = "/users/" + this.state.id;

    fetch(url)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("There is no user with this name");
        }
      })
      .then(user => this.setState({ user: user }));
  };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    fetch("/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));

    fetch(fetch_current_user)
      .then(res => res.json())
      .then(users => this.setState({ current_user_causes: users[0].causes }));
  }

  arrayContains(needle, arrhaystack) {
    return arrhaystack.indexOf(needle) > -1;
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }
  render() {
    var all_causes = this.state.featured_causes;
    // eslint-disable-next-line
    var user_causes = all_causes.map(cause => {
      if (this.arrayContains(cause.species, this.state.current_user_causes)) {
        return cause;
      }
    });
    user_causes = user_causes.filter(function(element) {
      return element !== undefined;
    });

    var features;
    var no_causes;
    if (user_causes[0] == null) {
      no_causes = (
        <div class="ui stackable center aligned page grid">
          <br />
          <br />
          <br />
          <Header>You have not Liked any causes</Header>
        </div>
      );
    } else {
      // eslint-disable-next-line
      features = user_causes.map(cause => {
        if (cause !== null) {
          return (
            <Feature
              key={cause.id}
              title={cause.species}
              image={cause.image}
              scientific_name={cause.scientific_name}
              user_who_added={cause.user_who_added}
            />
          );
        }
      });
    }

    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {" "}
        {!isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div class="grid">
            {/* <Image src={localStorage.getItem("ProfileImageUrl")} /> */}
            <div class="ui one column stackable center aligned page grid">
              <div class="ui one column stackable center aligned page grid">
                <Image
                  src={localStorage.getItem("ProfileImageUrl")}
                  size="medium"
                  circular
                  centered
                />
              </div>
              <Header as="h1">
                {localStorage.getItem("Username")}'s Causes
              </Header>
              <Grid>
                <Grid.Row>
                  <Card.Group itemsPerRow={2} stackable>
                    {features}
                  </Card.Group>
                  {no_causes}
                </Grid.Row>
              </Grid>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MyCauses;
