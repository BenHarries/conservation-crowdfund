import React, { Component } from "react";
import { Grid, Menu, Segment, Sticky } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Features from "./features";
import MyCauses from "./landing";
import Project from "./project";
import SearchBar from "./searchbar";

const routing = (
  <Router>
    <Switch>
      <div>
        <Route exact path="/" component={Features} />
        <Route path="/MyCauses" component={MyCauses} />
        <Route path="/Project" component={Project} />
        {/* <Route exact component={Notfound} /> */}
      </div>
    </Switch>
  </Router>
);

const Placeholder = () => routing;

export default class NavBar extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  handleContextRef = contextRef => this.setState({ contextRef });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { contextRef } = this.state;

    return (
      <Grid columns={3}>
        {/* <Rail position="center"> */}
        <Grid.Column width={2} floated="right" stretched>
          <Sticky context={contextRef}>
            <Menu fluid vertical tabular>
              {/* <NavLink activeClassName="active" to="/"> */}
              <Menu.Item
                name="Features"
                active={activeItem === "Features"}
                onClick={this.handleItemClick}
              >
                <img
                  alt="Mogoose"
                  src="https://images.ecosia.org/Kyxly3BaoKw7eG2kWCRMSp75Zb4=/0x390/smart/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F8%2F8d%2FAgriculture%252C_Fisheries_and_Conservation_Department.svg%2F1200px-Agriculture%252C_Fisheries_and_Conservation_Department.svg.png"
                />
              </Menu.Item>
              {/* </NavLink> */}
              <Menu.Item
                name="MyCauses"
                active={activeItem === "MyCauses"}
                onClick={this.handleItemClick}
              >
                {/* <NavLink activeClassName="active" to="/MyCauses"> */}
                My Causes
                {/* </NavLink> */}
              </Menu.Item>
              <Menu.Item
                name="MyAccount"
                active={activeItem === "MyAccount"}
                onClick={this.handleItemClick}
              >
                {this.state.users.map(user => (
                  <p key={user.id}>{user.username}'s Account</p>
                ))}
              </Menu.Item>
              <Menu.Item>
                <div>{/* <SearchBar /> */}</div>
              </Menu.Item>
            </Menu>
          </Sticky>
        </Grid.Column>
        {/* </Rail> */}

        <Grid.Column width={14} floated="right">
          <Segment>
            <Placeholder />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
