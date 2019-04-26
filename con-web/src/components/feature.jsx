import React, { Component } from "react";
import { Image, Card, Icon, Button, Progress } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./feature.css";

const API =
  "http://apiv3.iucnredlist.org/api/v3/species/loxodonta%20africana?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

class Feature extends Component {
  state = { percent: 33, species: this.props.title };

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    });
  componentDidMount() {
    console.log("yeah yeah", API + "/" + this.state.species);

    fetch(API)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => {
        let category = data.result.map(pic => {
          return (
            <p class="catagory-text">
              <strong>{pic.category}</strong>
            </p>
          );
        });
        this.setState({ category: category });
      });
  }
  render() {
    const { key } = this.props;
    const { title } = this.props;
    const { image } = this.props;
    const { category } = this.props;
    const slash = "/";
    const Linker = slash.concat(title);
    console.log(Linker);
    return (
      <Card id={key}>
        <Image src={image} />

        <Card.Content>
          <div class="category">{category}</div>{" "}
          <Card.Header>{title}</Card.Header>{" "}
          <Card.Meta>
            {/* <span className="date">
              by{" "}
              <NavLink to={Linker}>
                <strong>
                  <em>{title}</em>
                </strong>
              </NavLink>
            </span> */}
          </Card.Meta>
          {/* Allows maping turtle nests and increses chance... */}
          <Card.Description />
        </Card.Content>
        <Card.Content extra>
          {/* <a>
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
          <Progress percent={this.state.percent} indicating size="tiny" /> */}
          <Button basic color="blue" floated="right">
            <Icon name="add" />
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Feature;
