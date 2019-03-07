import React, { Component } from "react";
import { Rail, Segment, Sticky, Grid } from "semantic-ui-react";

import Features from "./features";
import NavBar from "./navbar";
import MenuExampleTabularOnLeft from "./newnav";

const Placeholder = () => <Features />;

export default class StickyExampleOffset extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Segment>
            <Rail>
              <Sticky context={contextRef} offset={0} pushing>
                <MenuExampleTabularOnLeft />
              </Sticky>
            </Rail>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}>
          <div ref={this.handleContextRef}>
            <Placeholder />
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
