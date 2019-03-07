import React, { Component } from "react";
import { Rail, Segment, Sticky, Grid } from "semantic-ui-react";

import MyCauses from "./landing";
import NavBar from "./navbar";

const Placeholder = () => <MyCauses />;

export default class StickyExampleOffset extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });

  render() {
    const { contextRef } = this.state;

    return (
      <Segment>
        <Rail>
          <Sticky context={contextRef} offset={0} pushing>
            <NavBar />
          </Sticky>
        </Rail>

        <div ref={this.handleContextRef}>
          <Placeholder />
        </div>
      </Segment>
    );
  }
}
