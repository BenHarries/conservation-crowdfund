import React, { Component } from "react";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
// const GridExampleCelledInternally = () => (
import "./landing.css";

class MyCauses extends Component {
  state = { users: [] };

  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div class="grid">
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Card>
                <Image src="http://savepangolins.org/wp-content/themes/SavePangolins/images/pangolin-new.png" />
                <Card.Content>
                  <Card.Header>Save Pangolins</Card.Header>
                  <Card.Meta>
                    <span className="date">Donating since 2014</span>
                  </Card.Meta>
                  <Card.Description />
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="pound sign" />
                    20.00 donated
                  </a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <div align="left">
                <h3 style={{ fontWeight: "bold" }}>
                  <ul>
                    <li>
                      <h4 class="c">
                        22<sup>nd</sup>
                      </h4>
                      <div class="b">
                        <em>Mar</em>
                      </div>

                      <p>20 camera traps installed in Uluru reserve</p>
                      <br />
                    </li>

                    <li>
                      <h4 class="c">
                        1<sup>st</sup>
                      </h4>
                      <div class="b">
                        <em>Feb</em>
                      </div>
                      <p>Population risen by 4%</p>
                      <br />
                    </li>
                  </ul>
                </h3>
              </div>
            </Grid.Column>
            <Grid.Column width={3}>
              <Card>
                <Image
                  src="https://images.ecosia.org/IycRw2HnuHLRnlLffi9yvXAXlKY=/0x390/smart/http%3A%2F%2F1.bp.blogspot.com%2F-RBacQ_-gXRQ%2FUb6kW5vfbxI%2FAAAAAAAADOU%2FYJRkcef4-IM%2Fs1600%2FPangolin-Amazing-Animal.jpg"
                  fluid
                />
                <Card.Content align="center">Endangered</Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MyCauses;
