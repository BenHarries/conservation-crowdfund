import React, { Component } from "react";
import { Image, Card, Icon, Button, Progress } from "semantic-ui-react";

class Feature extends Component {
  state = { percent: 33 };

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    });

  render() {
    const { title } = this.props;
    const { image } = this.props;
    return (
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className="date">
              by{" "}
              <a href="https://www.wwf.org.uk">
                <strong>
                  <em>{title}</em>
                </strong>
              </a>
            </span>
          </Card.Meta>
          Allows maping turtle nests and increses chance...
          <Card.Description />
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user outline" />
            22 Backers <br />
          </a>
          <a>
            <Icon name="pound sign" />
            4,542 pledged <br />
          </a>
          <a>
            <Icon name="map" />
            Venezeula, South America
          </a>
          <Progress percent={this.state.percent} indicating size="tiny" />
          <Button
            basic
            onClick={this.increment}
            color="blue"
            content="Donate"
            label={{
              as: "a",
              icon: "users",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "2,048"
            }}
          />{" "}
        </Card.Content>
      </Card>
    );
  }
}

export default Feature;
