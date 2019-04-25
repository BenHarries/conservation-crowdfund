import React, { Component } from "react";
import { Card, Button, Form, Grid } from "semantic-ui-react";

class List extends Component {
  state = { users: [] };
  handleSubmit = event => {
    event.preventDefault();

    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
    console.log(this.state);
  };
  render() {
    let desired_user = this.state.users.map(user => {
      return (
        <Grid.Column>
          <Card
            image={user.profile_pic}
            header={user.username}
            meta="Friend"
            description={user.causes}
            extra="and"
          />
        </Grid.Column>
      );
    });
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">List All Users</Button>
          <Grid stackable columns={2}>
            <Grid.Row>{desired_user}</Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}

export default List;
