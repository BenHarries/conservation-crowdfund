import React, { Component } from "react";
import { Card, Icon, Grid, Header } from "semantic-ui-react";

class List extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    console.log(this.state);
  }
  render() {
    let desired_user = this.state.users.map(user => {
      return (
        <Card
          image={user.profile_pic}
          header={user.username}
          description={user.causes}
        />
      );
    });
    return (
      <div>
        <div>
          <br />
          <br />
          <br />
          <div class="ui stackable center aligned page grid">
            <Header as="h2" textAlign="center">
              <Icon name="users" circular />
              <Header.Content>All Users</Header.Content>
            </Header>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Card.Group itemsPerRow={2} centered stackable>
            {desired_user}
          </Card.Group>
        </div>
      </div>
    );
  }
}

export default List;
