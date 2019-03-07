import React, { Component } from "react";
import { Grid, Menu, Segment, Rail, Sticky } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import MyCauses from "./landing";

const Placeholder = () => <MyCauses />;

export default class MenuExampleTabularOnLeftCauses extends Component {
  state = [{ activeItem: "bio" }];
  handleContextRef = contextRef => this.setState({ contextRef });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { contextRef } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          {/* <Segment> */}
          <Rail>
            <Sticky context={contextRef} offset={0} pushing>
              <Menu fluid vertical tabular>
                <NavLink activeClassName="active" to="/">
                  <Menu.Item
                    name="Features"
                    active={activeItem === "Features"}
                    onClick={this.handleItemClick}
                  >
                    <img src="https://images.ecosia.org/Kyxly3BaoKw7eG2kWCRMSp75Zb4=/0x390/smart/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F8%2F8d%2FAgriculture%252C_Fisheries_and_Conservation_Department.svg%2F1200px-Agriculture%252C_Fisheries_and_Conservation_Department.svg.png" />
                  </Menu.Item>
                </NavLink>
                <Menu.Item
                  name="MyCauses"
                  active={activeItem === "MyCauses"}
                  onClick={this.handleItemClick}
                >
                  <NavLink activeClassName="active" to="/MyCauses">
                    My Causes
                  </NavLink>
                </Menu.Item>
              </Menu>
            </Sticky>
          </Rail>
          {/* </Segment> */}
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Placeholder />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
