import React, { Component } from "react";
import { Card, Icon, Header } from "semantic-ui-react";

class List extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
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
