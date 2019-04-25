import React, { Component } from "react";
import {
  Grid,
  Segment,
  Button,
  Icon,
  Label,
  Progress,
  Reveal
} from "semantic-ui-react";
import "./project.css";

class Turtle extends Component {
  state = { percent: 80 };
  render() {
    return (
      <div>
        <section class="primary">
          <div class="title">
            <h1 class="charity">WWF</h1>

            <h1 class="top">Turtle Project</h1>
            <div class="line" />
          </div>
          <div class="bottom" />
        </section>
        <div class="bl">
          <em>£200</em>
        </div>
        <Progress percent={this.state.percent} indicating />

        <Grid columns={3} divided stackable>
          <Grid.Row stretched>
            <Grid.Column width={8}>
              <div class="video">
                {" "}
                <iframe
                  width="100%"
                  height="360px"
                  src="https://www.youtube.com/embed/t-KmQ6pGxg4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>{" "}
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment color="olive">
                About:
                <p class="middle">
                  Turtles are diapsids of the order Testudines (or Chelonii)
                  characterized by a special bony or cartilaginous shell
                  developed from their ribs and acting as a shield. "Turtle" may
                  refer to the order as a whole (American English) or to
                  fresh-water and sea-dwelling testudines (British English). The
                  order Testudines includes both extant (living) and extinct
                  species. The earliest known members of this group date from
                  220 million years ago, making turtles one of the oldest
                  reptile groups and a more ancient group than snakes or
                  crocodilians. Of the 356 known species alive today, some are
                  highly endangered
                </p>
              </Segment>
              <Segment>2</Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment color="red">
                <Reveal animated="move left">
                  <Reveal.Content visible>
                    <div class="visible">
                      <p align="center">Pledge £10 or more</p>
                      <p class="lighter">
                        Along with your personalized "Fossil Fuel Fact" on our
                        postcard with illustration, get six months of site
                        Membership—normally a $30 donation—to chat directly with
                        our reporters and editors, plus special Member
                        newsletter.
                      </p>
                      <p>Includes</p>
                      <ol>
                        <li>Coffee</li>
                      </ol>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div class="visible" align="center">
                      <Button color="blue" fluid>
                        <br />
                        <br />
                        Donate
                        <br />
                        <br />
                        <br />
                      </Button>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Segment>
              <Segment color="red">
                <Reveal animated="move left">
                  <Reveal.Content visible>
                    <div class="visible">
                      <p align="center">Pledge £20 or more</p>
                      <p class="lighter">
                        Along with your personalized "Fossil Fuel Fact" on our
                        postcard with illustration, get six months of site
                        Membership—normally a $30 donation—to chat directly with
                        our reporters and editors, plus special Member
                        newsletter.
                      </p>
                      <p>Includes</p>
                      <ol>
                        <li>Coffee</li>
                        <li>Tea</li>
                      </ol>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div class="visible" align="center">
                      <Button color="blue" fluid>
                        <br />
                        <br />
                        Donate
                        <br />
                        <br />
                        <br />
                      </Button>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Segment>
              <Segment color="red">
                <Reveal animated="move left" color="red">
                  <Reveal.Content visible>
                    <div class="visible">
                      <p align="center">Pledge £30 or more</p>
                      <p class="lighter">
                        Along with your personalized "Fossil Fuel Fact" on our
                        postcard with illustration, get six months of site
                        Membership—normally a $30 donation—to chat directly with
                        our reporters and editors, plus special Member
                        newsletter.
                      </p>
                      <p>Includes</p>
                      <ol>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                      </ol>
                    </div>
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <div class="visible" align="center">
                      <Button color="blue" fluid>
                        <br />
                        <br />
                        Donate
                        <br />
                        <br />
                        <br />
                      </Button>
                    </div>
                  </Reveal.Content>
                </Reveal>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Turtle;
